import {
  FormTitle,
  FormWrapper,
  FormContent,
  FormInput,
  FormButton,
  ButtonLoading,
} from "./styles";
import ErrorText from "./ErrorText";

function Form({ address, setAddress, getNFTs, notValidInput, loading }) {
  return (
    <FormWrapper>
      <FormTitle>altura challenge</FormTitle>
      <FormContent onSubmit={getNFTs} error={notValidInput}>
        <FormInput
          placeholder="enter wallet address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          error={notValidInput}
        />
        <FormButton type="submit">
          {loading ? <ButtonLoading /> : <h2>search</h2>}
        </FormButton>
      </FormContent>
      {notValidInput && <ErrorText />}
    </FormWrapper>
  );
}

export default Form;
