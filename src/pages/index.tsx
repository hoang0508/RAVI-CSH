import { CardHomePage, CardNews, CardSearch } from '@/components/cards';
import Contract from '@/components/contract/Contract';
import { IconPerson } from '@/components/icons';
import IconGroup from '@/components/icons/IconGroup';
import {
    InputLogin,
    InputSearch,
    InputText,
    InputTypeCheckbox,
    InputTypeRadio,
} from '@/components/inputs';

export default function Home() {
    return (
        <>
            <InputLogin />
            <InputTypeCheckbox label="test" />
            <InputTypeRadio label="test" />

            <Contract />

            <Contract />
        </>
    );
}
