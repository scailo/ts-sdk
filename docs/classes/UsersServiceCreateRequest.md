[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceCreateRequest

# Class: UsersServiceCreateRequest

Request message for creating a new user record.
* This is the primary entry point for onboarding employees or system users.
It handles identity, contact information, physical address, and payroll
configuration in a single atomic operation.

**Note:** Dynamic fields should be provided in the `form_data` field for
organization-specific requirements.

**`Generated`**

from message Scailo.UsersServiceCreateRequest

## Hierarchy

- `Message`\<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

  ↳ **`UsersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceCreateRequest.md#constructor)

### Properties

- [address](UsersServiceCreateRequest.md#address)
- [attendanceUomId](UsersServiceCreateRequest.md#attendanceuomid)
- [basicPayAmount](UsersServiceCreateRequest.md#basicpayamount)
- [basicPayUomId](UsersServiceCreateRequest.md#basicpayuomid)
- [birthday](UsersServiceCreateRequest.md#birthday)
- [bloodGroup](UsersServiceCreateRequest.md#bloodgroup)
- [city](UsersServiceCreateRequest.md#city)
- [code](UsersServiceCreateRequest.md#code)
- [country](UsersServiceCreateRequest.md#country)
- [departmentId](UsersServiceCreateRequest.md#departmentid)
- [email](UsersServiceCreateRequest.md#email)
- [entityUuid](UsersServiceCreateRequest.md#entityuuid)
- [formData](UsersServiceCreateRequest.md#formdata)
- [joiningDate](UsersServiceCreateRequest.md#joiningdate)
- [mobileRoleId](UsersServiceCreateRequest.md#mobileroleid)
- [name](UsersServiceCreateRequest.md#name)
- [payrollCurrencyId](UsersServiceCreateRequest.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceCreateRequest.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceCreateRequest.md#payrolltaxgroupid)
- [phone](UsersServiceCreateRequest.md#phone)
- [pinCode](UsersServiceCreateRequest.md#pincode)
- [plainTextPassword](UsersServiceCreateRequest.md#plaintextpassword)
- [roleId](UsersServiceCreateRequest.md#roleid)
- [shiftGroupId](UsersServiceCreateRequest.md#shiftgroupid)
- [state](UsersServiceCreateRequest.md#state)
- [userComment](UsersServiceCreateRequest.md#usercomment)
- [userType](UsersServiceCreateRequest.md#usertype)
- [username](UsersServiceCreateRequest.md#username)
- [vaultFolderId](UsersServiceCreateRequest.md#vaultfolderid)
- [workEmail](UsersServiceCreateRequest.md#workemail)
- [fields](UsersServiceCreateRequest.md#fields)
- [runtime](UsersServiceCreateRequest.md#runtime)
- [typeName](UsersServiceCreateRequest.md#typename)

### Methods

- [clone](UsersServiceCreateRequest.md#clone)
- [equals](UsersServiceCreateRequest.md#equals)
- [fromBinary](UsersServiceCreateRequest.md#frombinary)
- [fromJson](UsersServiceCreateRequest.md#fromjson)
- [fromJsonString](UsersServiceCreateRequest.md#fromjsonstring)
- [getType](UsersServiceCreateRequest.md#gettype)
- [toBinary](UsersServiceCreateRequest.md#tobinary)
- [toJSON](UsersServiceCreateRequest.md#tojson)
- [toJson](UsersServiceCreateRequest.md#tojson-1)
- [toJsonString](UsersServiceCreateRequest.md#tojsonstring)
- [equals](UsersServiceCreateRequest.md#equals-1)
- [fromBinary](UsersServiceCreateRequest.md#frombinary-1)
- [fromJson](UsersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](UsersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceCreateRequest**(`data?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Overrides

Message\&lt;UsersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L644)

## Properties

### address

• `Optional` **address**: `string`

**`Optional`**

**`Description`**

Primary street details, building number, or geographic line matching residential or official mailing location records.

**`Example`**

```ts
"123 Business Park Drive, Suite 400"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters.

**`Generated`**

from field: optional string address = 32;

#### Defined in

[src/users.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L420)

___

### attendanceUomId

• `Optional` **attendanceUomId**: `bigint`

**`Optional`**

**`Description`**

The internal Unit of Measure (UOM) tracking ID used to evaluate time structures, shifts, or active work hour configurations.

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unallocated.

**`Generated`**

from field: optional uint64 attendance_uom_id = 51;

#### Defined in

[src/users.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L532)

___

### basicPayAmount

• `Optional` **basicPayAmount**: `bigint`

**`Optional`**

**`Description`**

The raw volume integer representing basic salary compensation. **Critical:** Value must be defined in the minor unit of the currency.

**`Example`**

```ts
500000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. For example, a value of 500000 in USD represents $5,000.00.

**`Generated`**

from field: optional uint64 basic_pay_amount = 56;

#### Defined in

[src/users.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L612)

___

### basicPayUomId

• `Optional` **basicPayUomId**: `bigint`

**`Optional`**

**`Description`**

The internal Unit of Measure (UOM) tracking ID applied to contextualize basic pay duration distributions (e.g., Per Month, Per Annum).

**`Example`**

```ts
701
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unassigned.

**`Generated`**

from field: optional uint64 basic_pay_uom_id = 57;

#### Defined in

[src/users.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L628)

___

### birthday

• `Optional` **birthday**: `string`

**`Optional`**

**`Description`**

The calendar date of birth of the user, primarily captured for verification workflows.

**`Example`**

```ts
"Mon Jan 02 2006"
```

**`Regex`**

.*

**`Format`**

Must follow the specific string syntax format: `Day Month Date Year`.

**`Generated`**

from field: optional string birthday = 30;

#### Defined in

[src/users.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L388)

___

### bloodGroup

• `Optional` **bloodGroup**: `string`

**`Optional`**

**`Description`**

Medical identifier indicating the user's legal ABO blood group for emergency or corporate wellness logs.

**`Example`**

```ts
"O+"
```

**`Regex`**

^(A|B|AB|O)[+-]$

**`Format`**

Alphanumeric value containing classification type followed by rh factor sign.

**`Generated`**

from field: optional string blood_group = 37;

#### Defined in

[src/users.scailo_pb.ts:500](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L500)

___

### city

• `Optional` **city**: `string`

**`Optional`**

**`Description`**

The explicit city name corresponding to the user's primary residence or workplace assignment.

**`Example`**

```ts
"Austin"
```

**`Regex`**

.*

**`Format`**

String value, can be empty.

**`Generated`**

from field: optional string city = 33;

#### Defined in

[src/users.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L436)

___

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.

**`Example`**

```ts
"EMP-2026-992"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/users.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L260)

___

### country

• `Optional` **country**: `string`

**`Optional`**

**`Description`**

The country code corresponding to the user's operational location.

**`Example`**

```ts
"US"
```

**`Regex`**

^[A-Z]{2}$

**`Format`**

Strict ISO 3166-1 alpha-2 standard country codes are highly recommended.

**`Generated`**

from field: optional string country = 35;

#### Defined in

[src/users.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L468)

___

### departmentId

• `Optional` **departmentId**: `bigint`

**`Optional`**

**`Description`**

The unique internal sequence identifier of the corporate Department or business unit to which the user is structurally assigned.

**`Example`**

```ts
304
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 for general or unassigned staff vectors.

**`Generated`**

from field: optional uint64 department_id = 52;

#### Defined in

[src/users.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L548)

___

### email

• **email**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary communication or routing email address where structural system notifications are dispatched.

**`Example`**

```ts
"jane.doe@example.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a structurally sound and valid email address string.

**`Generated`**

from field: string email = 16;

#### Defined in

[src/users.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L340)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/users.scailo_pb.ts:184](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L184)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 70;

#### Defined in

[src/users.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L642)

___

### joiningDate

• `Optional` **joiningDate**: `string`

**`Optional`**

**`Description`**

The formal start or contract initialization date marking when the individual officially joins the team roster.

**`Example`**

```ts
"Wed Oct 25 2023"
```

**`Regex`**

.*

**`Format`**

Must follow the specific string syntax format: `Day Month Date Year`.

**`Generated`**

from field: optional string joining_date = 31;

#### Defined in

[src/users.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L404)

___

### mobileRoleId

• `Optional` **mobileRoleId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of a secondary security role tailored exclusively for mobile application endpoints.

**`Example`**

```ts
2048
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unassigned.

**`Generated`**

from field: optional uint64 mobile_role_id = 15;

#### Defined in

[src/users.scailo_pb.ts:324](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L324)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official or full legal name of the user as recognized on statutory documentation.

**`Example`**

```ts
"Jane Doe"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 12;

#### Defined in

[src/users.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L276)

___

### payrollCurrencyId

• `Optional` **payrollCurrencyId**: `bigint`

**`Optional`**

**`Description`**

The internal identifier matching the currency context in which the user's base salary and line compensation amounts are denominated.

**`Example`**

```ts
3
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unassigned.

**`Generated`**

from field: optional uint64 payroll_currency_id = 55;

#### Defined in

[src/users.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L596)

___

### payrollGroupId

• `Optional` **payrollGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the designated payroll distribution group used for localized batch processing and compensation disbursement.

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unassigned.

**`Generated`**

from field: optional uint64 payroll_group_id = 53;

#### Defined in

[src/users.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L564)

___

### payrollTaxGroupId

• `Optional` **payrollTaxGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the tax matrix or statutory configuration rule governing payroll deductions.

**`Example`**

```ts
19
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if no deductions are assigned.

**`Generated`**

from field: optional uint64 payroll_tax_group_id = 54;

#### Defined in

[src/users.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L580)

___

### phone

• **phone**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary telephone contact or mobile line number assigned to the account profile.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.+

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: string phone = 18;

#### Defined in

[src/users.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L372)

___

### pinCode

• `Optional` **pinCode**: `string`

**`Optional`**

**`Description`**

The standardized postal index number or geographic ZIP routing code.

**`Example`**

```ts
"78701"
```

**`Regex`**

.*

**`Format`**

String value, can be empty.

**`Generated`**

from field: optional string pin_code = 36;

#### Defined in

[src/users.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L484)

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

**`Mandatory`**

**`Description`**

The raw plain text password string supplied for account registration. This token is cryptographically hashed before commitment to persistent storage.

**`Example`**

```ts
"S3cureP@ssword123!"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string meeting organizational length and entropy guidelines.

**`Generated`**

from field: string plain_text_password = 13;

#### Defined in

[src/users.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L292)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the primary web application access or RBAC security role.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer greater than zero.

**`Generated`**

from field: uint64 role_id = 14;

#### Defined in

[src/users.scailo_pb.ts:308](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L308)

___

### shiftGroupId

• `Optional` **shiftGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the operational work shift group mapped to this account profile for scheduling and timecard verification.

**`Example`**

```ts
45
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unallocated.

**`Generated`**

from field: optional uint64 shift_group_id = 50;

#### Defined in

[src/users.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L516)

___

### state

• `Optional` **state**: `string`

**`Optional`**

**`Description`**

The administrative territory, province, state, or regional zone of residence.

**`Example`**

```ts
"Texas"
```

**`Regex`**

.*

**`Format`**

String value, can be empty.

**`Generated`**

from field: optional string state = 34;

#### Defined in

[src/users.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L452)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/users.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L200)

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The categorical classification of the user entity determining their system scope and behavioral rules.

**`Example`**

```ts
USER_TYPE_EMPLOYEE
```

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

[src/users.scailo_pb.ts:212](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L212)

___

### username

• **username**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique system-level login alias used by the actor to authenticate against the platform.

**`Example`**

```ts
"jane.doe"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string and completely unique across the given business entity space.

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L244)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/users.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L228)

___

### workEmail

• `Optional` **workEmail**: `string`

**`Optional`**

**`Description`**

A secondary, fallback, or corporate work email address for overlapping communication loops.

**`Example`**

```ts
"j.doe@corporate-hub.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

If provided, must be a valid email address string.

**`Generated`**

from field: optional string work_email = 17;

#### Defined in

[src/users.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L356)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L651)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L649)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceCreateRequest"``

#### Defined in

[src/users.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L650)

## Methods

### clone

▸ **clone**(): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`\<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`\<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md) \| `PlainMessage`\<[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L696)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users.scailo_pb.ts:684](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L684)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users.scailo_pb.ts:688](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L688)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCreateRequest`](UsersServiceCreateRequest.md)

#### Defined in

[src/users.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L692)
