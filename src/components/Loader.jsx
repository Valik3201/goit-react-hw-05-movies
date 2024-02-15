import { ReloadIcon } from '@radix-ui/react-icons';

/**
 * Component for displaying a loader icon.
 * @returns {JSX.Element} JSX element representing the Loader component.
 */
export const Loader = () => {
  return (
    <div className="flex items-center text-sm text-muted-foreground py-4">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </div>
  );
};
