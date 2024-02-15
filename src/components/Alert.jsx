import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

/**
 * Alert component for displaying destructive alerts.
 * @param {string} message - The message to display in the alert.
 * @returns {JSX.Element} JSX element representing the AlertDestructive component.
 */
export const AlertDestructive = ({ message }) => {
  return (
    <Alert variant="destructive" className="max-w-2xl">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

/**
 * Alert component for displaying informational alerts.
 * @returns {JSX.Element} JSX element representing the AlertInfo component.
 */
export const AlertInfo = () => {
  return (
    <Alert className="max-w-2xl">
      <InfoCircledIcon className="h-4 w-4 text-blue-500" />
      <AlertTitle>No Search Results</AlertTitle>
      <AlertDescription>
        Your search did not match any movies. Please try again with different
        keywords or filters.
      </AlertDescription>
    </Alert>
  );
};

/**
 * Alert component for indicating no cast information available.
 * @returns {JSX.Element} JSX element representing the AlertNoCast component.
 */
export const AlertNoCast = () => {
  return (
    <Alert className="max-w-2xl mt-8">
      <InfoCircledIcon className="h-4 w-4 text-blue-500" />
      <AlertTitle>No Cast Information</AlertTitle>
      <AlertDescription>
        There is no information available about the cast for this movie.
      </AlertDescription>
    </Alert>
  );
};

/**
 * Alert component for indicating no reviews available.
 * @returns {JSX.Element} JSX element representing the AlertNoReviews component.
 */
export const AlertNoReviews = () => {
  return (
    <Alert className="max-w-2xl mt-8">
      <InfoCircledIcon className="h-4 w-4 text-blue-500" />
      <AlertTitle>No Reviews Yet</AlertTitle>
      <AlertDescription>
        There are currently no reviews available for this movie.
      </AlertDescription>
    </Alert>
  );
};
