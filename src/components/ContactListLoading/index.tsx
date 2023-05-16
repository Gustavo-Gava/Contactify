import * as S from "./styles";

export const ContactListLoading = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Title>Contacts</S.Title>

				<S.SearchInputSkeleton />
			</S.Header>

			<S.Main>
				<S.ContactsWrapper>
					<S.ContactsGroupSkeleton>
						<S.ContactsGroupSkeletonItem />
						<S.ContactsGroupSkeletonItem />
						<S.ContactsGroupSkeletonItem />
					</S.ContactsGroupSkeleton>

					<S.ContactsGroupSkeleton>
						<S.ContactsGroupSkeletonItem />
						<S.ContactsGroupSkeletonItem />
						<S.ContactsGroupSkeletonItem />
					</S.ContactsGroupSkeleton>
				</S.ContactsWrapper>
			</S.Main>
		</S.Container>
	);
};
