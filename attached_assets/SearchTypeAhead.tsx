import { SearchDetails } from '@/models/app/searchDetails';
import { IComponent } from '../IComponent';
import { Spacer } from '../foundation/Spacer';
import { Divider } from './Divider';
import { Row } from './Row';
import { TextBox } from './TextBox';

interface SearchTypeAheadProps extends IComponent {
  searchText: string;
  searchDetails: SearchDetails[];
}

interface SearchGroupProps extends IComponent {
  content: string[];
}
interface SearchDetailsProps extends IComponent {
  searchDetails: SearchDetails[];
}
const SearchGroup = ({ content }: SearchGroupProps) =>
  content.map((item) => (
    <TextBox text={item} key={item} className="body-1 py-2 px-4"></TextBox>
  ));
const SearchDetailsView = ({ searchDetails }: SearchDetailsProps) => (
  <div>
    {searchDetails.map((item, index) => (
      <div key={index}>
        <TextBox
          className="title-3 py-2 px-4"
          key={item.header}
          text={item.header}
        ></TextBox>
        <Divider />
        <SearchGroup content={item.content}></SearchGroup>
        <Spacer size={32} />
      </div>
    ))}
  </div>
);

export const SearchTypeAhead = ({
  searchText,
  searchDetails,
}: SearchTypeAheadProps) => {
  return (
    <div className="searchSuggestion scroll">
      <Row className="searchForField title-3 px-4 py-2">
        <TextBox className="px-2" text={'See all results for '}></TextBox>
        <TextBox className="font-bold" text={searchText}></TextBox>
      </Row>
      <Spacer size={32} />
      <SearchDetailsView searchDetails={searchDetails}></SearchDetailsView>
    </div>
  );
};
