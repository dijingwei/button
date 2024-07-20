import { Button } from "di_input";
export default function App() {
  console.log(Button);

  return (
    <div>
      <Button
        backgroundColor="red"
        label="默认按钮"
        onClick={() => {}}
        primary
      />
      <Button
        borderRadius="50%"
        height="50px"
        label="圆"
        onClick={() => {}}
        primary
        width="50px"
      />
      <Button
        backgroundColor="#f5f5f5"
        color="#1e1e1e"
        disabled
        label="禁用按钮"
        onClick={() => {}}
      />
    </div>
  );
}
