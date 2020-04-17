// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Header from '../components/Header';
import ImageCaminho from '../../../assets/caminho.svg';
import ModalOrganization from './ModalOrganization';
import DocumentsScreen from '../Documents/DocumentsScreen';

const Container = styled.div`
	width: 100%;
`;

const InputSearch = styled.span`
	width: 90%;
	display: flex;
	justify-content: space-between;
	margin: 2rem 3rem 0 3rem;

	@media (max-width: 1125px) {
	}

	@media (max-width: 940px) {
		/* width: 40%; */

	}
`;

const Model = styled.p`
	color: #85144B;
	font-size: 2rem;
	font-family: Overpass-Black;
	font-weight: 600;
	/* margin-left: 5.5rem; */


	@media (max-width: 648px) {
		display: none;
	}
`;

const Span = styled.span`
	width: 38%;
	margin-top: 0.5rem;

	@media (max-width: 1125px) {
		width: 45%;
	}

	@media (max-width: 940px) {
		width: 47%;
	}

	@media (max-width: 648px) {
		width: 100%;
	}
`;

const Label = styled.label`
	color: #231F20;
	font-size: 1rem;
	font-family: Overpass, Bold;
	margin-right: 0.8rem;

	@media (max-width: 648px) {
		display: none;
	}
`;

const Input = styled.input`
	width: 70%;
	border: 0.5px solid #85144B;;
	border-radius: 3px;
	padding: 0.7rem;
`;

const Image = styled.img`
	/* width: 15%; */

`;

const ParagraphInput = styled.p`
	font-size: 0.9rem;
	font-family: Overpass, Regular;
`;

const Table = styled.table`
	width: 90%;
	margin: 2rem 3rem 0 3rem;

	@media (max-width: 785px) {
		display: flex;
		flex-direction: column;
	}

`;

const Tr = styled.tr`
	height: 2rem;
`;

const TableTitle = styled.th`
	background-color: #85144B;
	color: #FFFFFF;
	font-size: 0.8rem;
	font-family: Overpass, Regular;

	@media (max-width: 785px) {
		background-color: #FFFFFF;
		color: #85144B;
	}

`;

const TableList = styled.td`
	color: #404040;
`;

const TableList1 = styled.td`
	background-color: #FFCFCD;
	color: #404040;
`;

class OrganizationScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModal: undefined,
			// isModalCategory: undefined,
			redirect: 'organization',
			tableTitles: [
				'Organização',
				'CNPJ',
				'Usuário',
				'E-mail',
				'Telefone',
				'Criado em',
				'Autorização',
				'Vencimento',
				'Status',
			],
			tableDatas: [
				{
					organization: 'Instituto PrecisaSer',
					cnpj: '00.000.000/0000-00',
					user: 'Jorge Amado da Silva',
					email: 'organização@email.com',
					telephone: '(11)11111-1111',
					createdIn: '19/05/19',
					authorization: '-',
					dueDate: '-',
					status: 'PENDENTE',
				},
				{
					organization: 'Vai na Web',
					cnpj: '00.000.000/0000-00',
					user: 'Yasmin Miranda',
					email: 'nome@email.com',
					telephone: '(99) 99999-9999',
					createdIn: '18/06/19',
					authorization: '-',
					dueDate: '-',
					status: 'PAGO',
				},
				{
					organization: 'Casa de Rui Barbosa',
					cnpj: '00.000.000/0000-00',
					user: 'Alice Barbosa Souza',
					email: 'organização@email.com',
					telephone: '(77)77777-7777',
					createdIn: '17/06/19',
					authorization: '02/06/19',
					dueDate: '02/07/19',
					status: 'PENDENTE',
				},
				{
					organization: 'Biblioteca da Maré',
					cnpj: '00.000.000/0000-00',
					user: 'Vinicius Almeida Rodrigues',
					email: 'organização@email.com',
					telephone: '(22)22222-2222',
					createdIn: '15/06/19',
					authorization: '15/07/19',
					dueDate: '-',
					status: 'ISENTO',
				},
				{
					organization: 'Museu de Arte ZO',
					cnpj: '00.000.000/0000-00',
					user: 'Tarcila do Amaral Gonçalves',
					email: 'organização@email.com',
					telephone: '(44)44444-4444',
					createdIn: '12/06/19',
					authorization: '15/06/19',
					dueDate: '15/07/19',
					status: 'VENCIDO',
				},
			],
		};
	}

		isModalOpen = (event) => {
			event.stopPropagation();
			this.setState({
				isModal: !this.state.isModal,
			});
		}

		handleClick = (item) => {
			this.setState({
				redirect: item,
			});
		};

		render() {
			return (
				<Container>
					{this.state.isModal && <ModalOrganization handleCloseModal={this.isModalOpen}/> }
					<Header handleClick={this.handleClick} />
					{this.state.redirect === 'organization' ? (
						<>
							<InputSearch>
								<Model>Gerenciar organizações</Model>
								<Span>
									<Label>Vizualizar por:</Label>
									<Input
										/* type="select"
							onChange={this.handleChange} */
										placeholder="Selecionar status"
									/>
									{/* <Image src={ImageCaminho} /> */}
									{/* <ParagraphInput>Pendente de Autorização</ParagraphInput>
						<ParagraphInput>Pendente de Pagamento</ParagraphInput>
						<ParagraphInput>Isento</ParagraphInput>
						<ParagraphInput>Pago</ParagraphInput>
						<ParagraphInput>Vencida</ParagraphInput> */}
								</Span>
							</InputSearch>
							<Table>
								<Tr>
									{this.state.tableTitles.map(title => (
										<TableTitle key={title}>{title}</TableTitle>
									))}
								</Tr>
								{this.state.tableDatas.map(item => (
									<Tr key={item}>
										<TableList>{item.organization}</TableList>
										<TableList>{item.cnpj}</TableList>
										<TableList>{item.user}</TableList>
										<TableList>{item.email}</TableList>
										<TableList>{item.telephone}</TableList>
										<TableList>{item.createdIn}</TableList>
										<TableList>{item.authorization}</TableList>
										<TableList>{item.dueDate}</TableList>
										<TableList onClick={this.isModalOpen}>{item.status}</TableList>
									</Tr>
								))}
							</Table>
						</>
					) : <DocumentsScreen />
					}
				</Container>
			);
		}
}

export default OrganizationScreen;