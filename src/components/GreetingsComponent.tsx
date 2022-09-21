export type GreetingsComponentProps = {

    name: string;
    origin: string;


}

export default function GreetingsComponent(props: GreetingsComponentProps) {

    return (

        <div>

            <h1>Hey {props.name} from {props.origin} ! What's up?</h1>

        </div>


    );

}