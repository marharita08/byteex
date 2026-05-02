export const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-border-light border-t-primary animate-spin" />
    </div>
  );
};
