export interface AppointmentProps{
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

export class Appointment{
    private props: AppointmentProps;

    getCustomer(){
        return this.props.customer;
    }

    getStartsAt(){
        return this.props.startsAt;
    }

    getEndsAt(){
        return this.props.endsAt;
    }

    constructor(props: AppointmentProps){
        this.props = props;
    }

}