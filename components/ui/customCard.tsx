import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

interface CustomCardProps {
  title: string,
  description: string,
  content: number | string,
  footer: string
}

const CustomCard: React.FC<CustomCardProps> = ({ title, description, content, footer }) => {
  return (
    <Card className="flex flex-col items-center justify-center text-center p-4 bg-gray-300 font-serif"> {/* Căn giữa tất cả phần tử */}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;