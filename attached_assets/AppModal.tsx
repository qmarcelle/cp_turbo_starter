import FocusTrap from 'focus-trap-react';
import Image from 'next/image';
import React, { ReactElement, createContext } from 'react';
import { Modal } from 'react-responsive-modal';
import { create } from 'zustand';
import leftIcon from '../../../public/assets/left.svg';
import { IComponent } from '../IComponent';
import { Column } from './Column';
import { bcbstSilhouletteLogo, closeIcon } from './Icons';
import { Row } from './Row';
import { Spacer } from './Spacer';
import { TextBox } from './TextBox';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ModalProps extends IComponent {
  content: ReactElement & ModalChildProps;
  store?: any;
  isChildActionAppModal?: boolean;
  childModalContent?: ReactElement & ModalChildProps;
}
interface ModalControllerProps {
  showBack: boolean;
  showModal: boolean;
  pageIndex: number;
  store: null;
  isChildAction?: boolean;
  updateShowBack: (isShowBack: boolean) => void;
  updateshowModal: (isShowBack: boolean) => void;
  updatepageIndex: (pageIndex: number) => void;
  updateStore: (store: null) => void;
  showAppModal: (props: ModalProps) => void;
  dismissModal: () => void;
  isChildModal: boolean;
  showChildModal: () => void;
  dismissChildModal: () => void;
  isChildActionAppModalProp: boolean;
}

export const useAppModalStore = create<ModalControllerProps>((set) => ({
  showBack: false,
  showModal: false,
  isChildModal: false,
  pageIndex: 0,
  store: null,
  isChildActionAppModalProp: false,
  updateShowBack: (isShowBack: boolean) =>
    set(() => ({ showBack: isShowBack })),
  updateshowModal: (isShowModal: boolean) =>
    set(() => ({ showModal: isShowModal })),
  updatepageIndex: (pageIndex: number) => set(() => ({ pageIndex: pageIndex })),
  updateStore: (store: null) => set(() => ({ store: store })),
  showAppModal: ({
    content,
    store,
    isChildActionAppModal,
    childModalContent,
  }: ModalProps) => {
    modalBody = content;
    childModalBody = childModalContent;
    if (isChildActionAppModal) {
      set(() => ({
        isChildActionAppModalProp: isChildActionAppModal,
      }));
    }
    set(() => ({
      showModal: true,
    }));
    set(() => ({
      store: store,
    }));
    pageIndexStack = [0];
  },
  dismissModal: () => {
    set(() => ({
      showModal: false,
    }));
    set(() => ({
      store: null,
    }));
    set(() => ({
      showBack: false,
    }));
    set(() => ({
      pageIndex: 0,
    }));
    set(() => ({
      isChildModal: false,
    }));
    modalBody = null;
  },
  showChildModal: () => {
    set(() => ({
      isChildModal: true,
    }));
  },
  dismissChildModal: () => {
    set(() => ({
      isChildModal: false,
    }));
  },
}));
let modalBody: ReactElement | null = null;
let childModalBody: ReactElement | null | undefined = null;
let pageIndexStack: number[] = [];
export interface ModalChildProps {
  changePage?: (pageIndex: number, showBackButton?: boolean) => any;
  pageIndex?: number;
}

export const ModalContext = createContext<any>(null);

interface ModalHeaderProps {
  onClose: () => any;
}

const ModalHeader = ({ onClose }: ModalHeaderProps) => {
  const { updatepageIndex, updateShowBack, pageIndex, showBack } =
    useAppModalStore();
  const onBackPressed = () => {
    pageIndexStack.pop();
    const popIndex = pageIndexStack[pageIndexStack.length - 1];
    updatepageIndex(popIndex ?? 0);
    if (pageIndex == 0) {
      updateShowBack(false);
    }
  };

  const handleKeyDown = (e: {
    preventDefault: () => void;
    keyCode: number;
  }) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      onClose();
    }
  };

  return (
    <Row className="justify-between modal-header items-center relative">
      {showBack ? (
        <Row
          tabIndex={1}
          onClick={onBackPressed}
          className="items-center focus-icon"
        >
          <Image src={leftIcon} className="modal-icon" alt="back" />
          <TextBox text="Back" className="primary-color underline" />
        </Row>
      ) : (
        <div tabIndex={1} />
      )}

      <Image
        src={bcbstSilhouletteLogo}
        className="modal-icon modal-header-logo absolute m-auto left-0 right-0"
        alt="bcbst logo"
      />
      <div
        tabIndex={0}
        className="size-8 focus-icon"
        onKeyDown={handleKeyDown}
        onClick={onClose}
      >
        <Image src={closeIcon} className="size-4" alt="close" />
      </div>
    </Row>
  );
};

const ModalFooter = () => {
  return (
    <Row className="justify-center modal-footer">
      <Image
        src={bcbstSilhouletteLogo}
        className="modal-icon"
        alt="bcbst logo"
      />
    </Row>
  );
};

export const AppModal = () => {
  const {
    dismissModal,
    updateShowBack,
    updatepageIndex,
    store,
    showModal,
    pageIndex,
    isChildModal,
    showChildModal,
    dismissChildModal,
    isChildActionAppModalProp,
  } = useAppModalStore();
  const changePage = (pageIndex: number, showBackButton: boolean = false) => {
    updateShowBack(showBackButton);
    updatepageIndex(pageIndex);
    pageIndexStack.push(pageIndex);
  };
  const closeModal = () => {
    isChildActionAppModalProp ? showChildModal() : dismissModal();
  };

  const closeChildModal = () => {
    dismissChildModal();
  };
  const closeAllModal = () => {
    dismissModal();
  };
  return (
    <ModalContext.Provider value={store}>
      <InnerAppModal
        showModal={showModal}
        modalBody={modalBody ?? <></>}
        changePage={changePage}
        pageIndex={pageIndex}
        closeModal={closeModal}
        isChildModal={isChildModal}
        closeChildModal={closeChildModal}
        closeAllModal={closeAllModal}
        childModalBody={childModalBody ?? <></>}
      />
    </ModalContext.Provider>
  );
};

type InnerAppModalProps = {
  showModal?: boolean;
  closeModal?: () => any;
  modalBody: ReactElement;
  changePage?: (pageIndex: number, showBackButton: boolean) => any;
  pageIndex?: number;
  isChildModal?: boolean;
  closeChildModal?: () => any;
  closeAllModal?: () => any;
  childModalBody?: ReactElement;
};

export const InnerAppModal = ({
  showModal = true,
  closeModal = () => {},
  modalBody,
  changePage = () => {},
  pageIndex = 0,
  isChildModal = false,
  childModalBody,
}: InnerAppModalProps) => {
  return (
    <Modal
      classNames={{
        overlay: 'modal-overlay',
      }}
      showCloseIcon={false}
      open={showModal}
      closeOnOverlayClick={true}
      onClose={closeModal}
    >
      <FocusTrap>
        <div>
          <Column className="modal-container">
            <ModalHeader onClose={closeModal} />
            <Spacer size={32} />
            <div className="flex flex-row flex-grow justify-center">
              <div className="flex flex-row justify-center modal-content">
                {modalBody ? (
                  React.cloneElement(modalBody, {
                    changePage,
                    pageIndex: pageIndex,
                  })
                ) : (
                  <div />
                )}
              </div>
            </div>
            {isChildModal && (
              <div className="child-modal">
                <div className="child-modal-content">{childModalBody}</div>
              </div>
            )}
            <Spacer size={32} />
            <ModalFooter />
          </Column>
        </div>
      </FocusTrap>
    </Modal>
  );
};
