import FocusTrap from 'focus-trap-react';
import Image from 'next/image';
import React, { ReactElement, createContext } from 'react';
import { Modal } from 'react-responsive-modal';
import { create } from 'zustand';
import { Column } from './Column';
import { bcbstSilhouletteLogo, closeIcon, leftIcon } from './Icons';
import { Row } from './Row';
import { Spacer } from './Spacer';
import { TextBox } from './TextBox';

interface ModalProps {
  content: ReactElement;
  footer: ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store?: any;
}

interface ModalControllerProps {
  showBack: boolean;
  showModal: boolean;
  pageIndex: number;
  store: null;
  updateShowBack: (isShowBack: boolean) => void;
  updateShowModal: (isShowBack: boolean) => void;
  updatePageIndex: (pageIndex: number) => void;
  updateStore: (store: null) => void;
  showSideBar: (props: ModalProps) => void;
  dismissModal: () => void;
}

/**
 * Invokes the App Modal and shows it up above all pages.
 * @param content The Child component of the Modal which it displays
 */
export const useSideBarModalStore = create<ModalControllerProps>((set) => ({
  showBack: false,
  showModal: false,
  pageIndex: 0,
  store: null,
  updateShowBack: (isShowBack: boolean) =>
    set(() => ({ showBack: isShowBack })),
  updateShowModal: (isShowModal: boolean) =>
    set(() => ({ showModal: isShowModal })),
  updatePageIndex: (pageIndex: number) => set(() => ({ pageIndex: pageIndex })),
  updateStore: (store: null) => set(() => ({ store: store })),
  showSideBar: ({ content, footer, store }: ModalProps) => {
    modalBody = content;
    modalFooter = footer;
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
    modalBody = null;
    modalFooter = null;
  },
}));
let modalBody: ReactElement | null = null;
let modalFooter: ReactElement | null = null;
let pageIndexStack: number[] = [];

export interface ModalChildProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changePage?: (pageIndex: number, showBackButton?: boolean) => any;
  pageIndex?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalContext = createContext<any>(null);

interface ModalHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose: () => any;
}

const ModalHeader = ({ onClose }: ModalHeaderProps) => {
  const {
    updatePageIndex: updatePageIndex,
    updateShowBack,
    pageIndex,
    showBack,
  } = useSideBarModalStore();
  const onBackPressed = () => {
    pageIndexStack.pop();
    const popIndex = pageIndexStack[pageIndexStack.length - 1];
    updatePageIndex(popIndex ?? 0);
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
        className="size-8 focus-icon"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={onClose}
      >
        <Image src={closeIcon} className="size-4" alt="close" />
      </div>
    </Row>
  );
};

export const SideBarModal = () => {
  const {
    dismissModal,
    updateShowBack,
    updatePageIndex,
    store,
    showModal,
    pageIndex,
  } = useSideBarModalStore();
  const changePage = (pageIndex: number, showBackButton: boolean = false) => {
    updateShowBack(showBackButton);
    updatePageIndex(pageIndex);
    pageIndexStack.push(pageIndex);
  };

  const closeModal = () => {
    dismissModal();
  };

  return (
    <ModalContext.Provider value={store}>
      <InnerAppModal
        showModal={showModal}
        modalBody={modalBody ?? <></>}
        modalFooter={modalFooter ?? <></>}
        changePage={changePage}
        pageIndex={pageIndex}
        closeModal={closeModal}
      />
    </ModalContext.Provider>
  );
};

type InnerAppModalProps = {
  showModal?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeModal?: () => any;
  modalBody: ReactElement;
  modalFooter: ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changePage?: (pageIndex: number, showBackButton: boolean) => any;
  pageIndex?: number;
};

export const InnerAppModal = ({
  showModal = true,
  closeModal = () => {},
  modalBody,
  modalFooter,
  changePage = () => {},
  pageIndex = 0,
}: InnerAppModalProps) => {
  return (
    <Modal
      classNames={{
        overlay: 'sideBar-overlay',
        modal: 'sideBar-Container',
      }}
      showCloseIcon={false}
      open={showModal}
      closeOnOverlayClick={true}
      onClose={closeModal}
    >
      <FocusTrap>
        <div>
          <Column>
            <div className="sideBar-content">
              <ModalHeader onClose={closeModal} />
              <Spacer size={32} />
              <Column className="items-stretch p-4">
                {modalBody ? (
                  React.cloneElement(modalBody, {
                    changePage,
                    pageIndex: pageIndex,
                  })
                ) : (
                  <div />
                )}
              </Column>
              <Spacer size={32} />
            </div>
            {modalFooter}
          </Column>
        </div>
      </FocusTrap>
    </Modal>
  );
};
