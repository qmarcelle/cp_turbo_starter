const LoaderItem = ({ width = 'full', rounded = 'full' }) => (
  <div
    className={`h-5 bg-gray-200 dark:bg-gray-700 mb-2.5 rounded-${rounded} loaderWidth ${
      width !== 'full' ? `max-w-[${width}px]` : ''
    }`}
  ></div>
);

export const Loader = ({ items = 9, maxWidth = 'sm' }) => {
  return (
    <div role="status" className={`max-w-${maxWidth} animate-pulse`}>
      {[...Array(items - 1)].map((_, index) => (
        <LoaderItem key={index} width={index % 3 === 0 ? 'full' : '330'} />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};
