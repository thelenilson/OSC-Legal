// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Icon
import Exit from '../../../assets/exit.svg';

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #00000060;
  display: flex;
  align-items: center;
  justify-content: center;
	z-index: 20;
	position: absolute;
`;

const Container = styled.form`
	margin: 1rem;
	width: 33%;
	overflow: hidden auto;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 3px;

	::-webkit-scrollbar {
  width: 10px;
	}

	::-webkit-scrollbar-track {
  background: #fff;
	}

	::-webkit-scrollbar-thumb {
  	background: #FFCFCD;
	}

	::-webkit-scrollbar-thumb:hover {
  	background: #f9bdbb;
	}
`;

const Content = styled.div`
	max-height: calc(98vh - 0.25rem);
`;

const ContainerExit = styled.figure`
	padding-top: 1rem;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
`;

const ExitIcon = styled.img`
	width: 1.3rem;
	align-self: flex-end;
	margin-right: 4%;
`;

const Title = styled.h2`
	padding-top: ${props => (props.org && '3rem')};
	padding-left: ${props => (props.org && '.6rem')};
	padding-bottom: 2rem;
	width: 100%;
	font-size: 1.3rem;
	text-transform: uppercase;
	font-family: Overpass;
	font-weight: 900;
`;

const ContainerUser = styled.div`
	padding-left: 3.5rem;
	width: 100%;
	display: flex;
	flex-flow: wrap column;
`;

const UserTitle = styled.h2`
	padding-left: ${props => (props.createOrg && '.8rem')};
	padding-bottom: .5rem;
	font-size: 0.7rem;
	color: #85144b;
	text-transform: uppercase;
	font-family: Overpass;
	font-weight: bold;
`;

const UserText = styled.p`
  font-size: 1rem;
	padding-bottom: 1.5rem;
  font-family: "Overpass", Light;

  @media (max-width: 648px) {
    & {
      margin: 0 0 1.6rem 3.5rem;
    }
  };

  @media (max-width: 425px) {
    & {
      margin: 0 0 1.6rem 0;
    }
  };
`;

const CreateOrgTitle = styled.h1`
	padding-left: 3.5rem;
	padding-bottom: 2rem;
	color: #85144B;
	font-size: 2rem;
	align-self: flex-start;
	font-family: "Overpass", sans-serif;
	font-weight: 900;
`;

const ContentOrganization = styled.div`
	width: 100%;
`;

const ContentOrganizationItem = styled.label`
	padding-bottom: 2rem;
`;

const WrapOrganization = styled.div`
	width: 100%;
  margin-bottom: 1rem;
  display: flex;
	justify-content: center;
  flex-direction: column;
`;

const WrapOrganizationContent = styled.div`
	display: flex;
`;

const WrapOrganizationItem = styled.div`
	${'' /* margin-right: 1.5rem; */}
	padding-bottom: 2rem;
	width: 50%;
	display: flex;
	flex-direction: column;
`;

const ContainerConcludeButton = styled.span`
	${'' /* padding-left: 3.5rem; */}
	padding-left: 3rem;
	padding-right: 3rem;
	padding-bottom: 1rem;
	width: 100%;
	${'' /* display: flex;
	justify-content: center; */}
`;

const Teste = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Teste2 = styled.div`
	padding-left: 3rem;
	padding-right: 3rem;
	${'' /* padding-left: 3.5rem; */}
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ErrorMessage = styled.p`
  margin: 0.5rem 0 1rem 0.8rem;
  font-size: 0.8rem;
  color: #f00;
  align-self: flex-start;
	font-family: Overpass;
  font-weight: 400;
  @media (max-width: 425px) {
    margin: 0.5rem 0 0.5rem 0;
  }
`;

export default class ModalCreateOrganization extends Component {
	state = {
		dataOrganization: {
			tradingName: '',
			companyName: '',
			cnpj: '',
			// email: '',
			telephone: '',
			address: '',
			addressComplement: '',
			neighborhood: '',
			city: '',
			cep: '',
		},
		userData: [
			{
				name: 'Yasmin Miranda',
				email: 'nome@email.com',
				telephone: '(99) 99999-9999',
				cpf: '000000000-00',
			},
		],
		isTradingNameError: false,
		isCompanyNameError: false,
		isCnpjError: false,
		isTelephoneError: false,
		isAddressError: false,
		isAddressComplementError: false,
		isNeighborhoodError: false,
		isCityError: false,
		isCepError: false,
	};


	handleErros = () => {
		const {
			tradingName,
			companyName,
			cnpj,
			telephone,
			address,
			addressComplement,
			neighborhood,
			city,
			cep,
		} = this.state.dataOrganization;


		if (!tradingName || tradingName.length < 4) {
			this.setState({
				isTradingNameError: true,
			});
		} else {
			this.setState({
				isTradingNameError: false,
			});
		}

		if (!companyName || companyName.length < 4) {
			this.setState({
				isCompanyNameError: true,
			});
		} else {
			this.setState({
				isCompanyNameError: false,
			});
		}

		if (!cnpj || cnpj.length !== 14) {
			this.setState({
				isCnpjError: true,
			});
			// verificar como faz essa validação
		} else {
			this.setState({
				isCnpjError: false,
			});
		}

		if (!telephone || telephone.length < 8) {
			this.setState({
				isTelephoneError: true,
			});
		} else {
			this.setState({
				isTelephoneError: false,
			});
		}

		if (!address || address.length < 4) {
			this.setState({
				isAddressError: true,
			});
		} else {
			this.setState({
				isAddressError: false,
			});
		}

		if (!addressComplement || addressComplement.length < 4) {
			this.setState({
				isAddressComplementError: true,
			});
		} else {
			this.setState({
				isAddressComplementError: false,
			});
		}

		if (!city || city.length < 4) {
			this.setState({
				isCityError: true,
			});
		} else {
			this.setState({
				isCityError: false,
			});
		}

		if (!neighborhood || neighborhood.length < 4) {
			this.setState({
				isNeighborhoodError: true,
			});
		} else {
			this.setState({
				isNeighborhoodError: false,
			});
		}

		if (!cep || cep.length !== 8) {
			this.setState({
				isCepError: true,
			});
		} else {
			this.setState({
				isCepError: false,
			});
		}

		if (tradingName.length > 4 && companyName.length > 4 && cnpj.length === 14
			&& telephone.length >= 8 && address.length > 4 && addressComplement.length > 4 && city.length > 4
			&& neighborhood.length > 4 && cep === 8
		) {
			console.log('enviouuuu tow tow tow');
		}
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.handleErros();
	};

	handleChange = (field, ev) => {
		const { dataOrganization } = this.state;
		dataOrganization[field] = ev.target.value;
		this.setState({ dataOrganization });

		console.log('dataOrganization[field]', field, dataOrganization[field]);
	};

	render() {
		const errorMessage = [
			'Insira um nome fantasia válido.',
			'Insira uma razão social válida.',
			'Insira um CNPJ válido.',
			'Insira um número de telefone válido.',
			'Insira um endereço válido.',
			'Insira um complemento válido.',
			'Insira uma cidade válida.',
			'Insira um bairro válido.',
			'Insira um cep válido.',
		];

		const {
			isTradingNameError,
			isCompanyNameError,
			isCnpjError,
			isTelephoneError,
			isAddressError,
			isAddressComplementError,
			isCityError,
			isNeighborhoodError,
			isCepError,
		} = this.state;

		return (
			<Overlay>
				<Container onSubmit={this.handleSubmit}>
					<Content>
						<ContainerExit>
							<ExitIcon src={Exit} alt="Fechar"/>
						</ContainerExit>
						<Teste>
							<CreateOrgTitle>Criar Organização</CreateOrgTitle>
							{this.state.userData.map(item => (
								<ContainerUser key={item}>
									<Title>Usuário</Title>
									<UserTitle>nome</UserTitle>
									<UserText>{item.name}</UserText>
									<UserTitle>e-mail</UserTitle>
									<UserText>{item.email}</UserText>
									<UserTitle>telefone</UserTitle>
									<UserText>{item.telephone}</UserText>
									<UserTitle>cpf</UserTitle>
									<UserText>{item.cpf}</UserText>
								</ContainerUser>
							))}
							<Teste2>
								<Title org>Organização</Title>
								<ContentOrganization>
									<ContentOrganizationItem>
										<UserTitle createOrg>nome fantasia</UserTitle>
										<Input
											modalOrg
											margin={isTradingNameError ? '0' : '0 0 2rem'}
											type="text"
											placeholder="Nome da organização"
											onChange={ev => this.handleChange('tradingName', ev)}
											value={this.state.tradingName}
											name="tradingName"
											required
										/>
										{isTradingNameError && <ErrorMessage>{errorMessage[0]}</ErrorMessage>}
									</ContentOrganizationItem>
									<ContentOrganizationItem>
										<UserTitle createOrg>razão social</UserTitle>
										<Input
											modalOrg
											margin={isCompanyNameError ? '0' : '0 0 2rem'}
											type="text"
											placeholder="Razão social"
											onChange={ev => this.handleChange('companyName', ev)}
											value={this.state.companyName}
											name="companyName"
											required
										/>
										{isCompanyNameError && <ErrorMessage>{errorMessage[1]}</ErrorMessage>}
									</ContentOrganizationItem>
									<ContentOrganizationItem>
										<UserTitle createOrg>cnpj</UserTitle>
										<Input
											modalOrg
											margin={isCnpjError ? '0' : '0 0 2rem'}
											type="text"
											placeholder="00.000.000/0000-00"
											onChange={ev => this.handleChange('cnpj', ev)}
											value={this.state.cnpj}
											name="cnpj"
											required
										/>
										{isCnpjError && <ErrorMessage>{errorMessage[2]}</ErrorMessage>}
									</ContentOrganizationItem>
									{/* <ContentOrganizationItem>
										<UserTitle createOrg>email</UserTitle>
										<Input
											modalOrg
											margin={'0 0 2rem'}
											type="text"
											placeholder="email@email.com"
											value={this.state.email}
											name="email"
											required
										/>
									</ContentOrganizationItem> */}
									<ContentOrganizationItem>
										<UserTitle createOrg>telefone</UserTitle>
										<Input
											modalOrg
											margin={isTelephoneError ? '0' : '0 0 2rem'}
											type="text"
											placeholder="(00) 00000-0000"
											onChange={ev => this.handleChange('telephone', ev)}
											value={this.state.telephone}
											name="telephone"
											required
										/>
										{isTelephoneError && <ErrorMessage>{errorMessage[3]}</ErrorMessage>}
									</ContentOrganizationItem>
									<ContentOrganizationItem>
										<UserTitle createOrg>endereço</UserTitle>
										<Input
											modalOrg
											margin={isAddressError ? '0' : '0 0 2rem'}
											type="text"
											placeholder="Endereço"
											onChange={ev => this.handleChange('address', ev)}
											value={this.state.address}
											name="address"
											required
										/>
										{isAddressError && <ErrorMessage>{errorMessage[4]}</ErrorMessage>}
									</ContentOrganizationItem>
								</ContentOrganization>
								<WrapOrganization>
									<WrapOrganizationContent>
										<WrapOrganizationItem style={{ marginRight: '1rem', paddingBottom: isAddressComplementError && '1rem' }}>
											<UserTitle createOrg>complemento</UserTitle>
											<Input
												modalOrg
												// margin={'0 0 2rem'}
												type="text"
												placeholder="Complemento"
												onChange={ev => this.handleChange('addressComplement', ev)}
												value={this.state.addressComplement}
												name="addressComplement"
												required
											/>
											{isAddressComplementError && <ErrorMessage>{errorMessage[5]}</ErrorMessage>}
										</WrapOrganizationItem>
										<WrapOrganizationItem style={{ paddingBottom: isCityError && '1rem' }}>
											<UserTitle createOrg>cidade</UserTitle>
											<Input
												modalOrg
												// margin={'0 0 2rem'}
												type="text"
												placeholder="Cidade"
												onChange={ev => this.handleChange('city', ev)}
												value={this.state.city}
												name="city"
												required
											/>
											{isCityError && <ErrorMessage>{errorMessage[6]}</ErrorMessage>}
										</WrapOrganizationItem>
									</WrapOrganizationContent>
									<WrapOrganizationContent>
										<WrapOrganizationItem style={{ marginRight: '1rem', paddingBottom: isNeighborhoodError && '1rem' }}>
											<UserTitle createOrg>bairro</UserTitle>
											<Input
												modalOrg
												// margin={'0 0 2rem'}
												type="text"
												placeholder="Bairro"
												onChange={ev => this.handleChange('neighborhood', ev)}
												value={this.state.neighborhood}
												name="neighborhood"
												required
											/>
											{isNeighborhoodError && <ErrorMessage>{errorMessage[7]}</ErrorMessage>}
										</WrapOrganizationItem>
										<WrapOrganizationItem style={{ paddingBottom: isCepError && '1rem' }}>
											<UserTitle createOrg>cep</UserTitle>
											<Input
												modalOrg
												// margin={'0 0 2rem'}
												type="text"
												placeholder="00000-000"
												onChange={ev => this.handleChange('cep', ev)}
												value={this.state.cep}
												name="cep"
												required
											/>
											{isCepError && <ErrorMessage>{errorMessage[8]}</ErrorMessage>}
										</WrapOrganizationItem>
									</WrapOrganizationContent>
								</WrapOrganization>
							</Teste2>
							<ContainerConcludeButton>
								<Button
									// to={'/sucessfully'}
									type="submit"
									width={'100%'}
									text="concluir"
									textTransform
								/>
							</ContainerConcludeButton>
						</Teste>
					</Content>
				</Container>
			</Overlay>
		);
	}
}
