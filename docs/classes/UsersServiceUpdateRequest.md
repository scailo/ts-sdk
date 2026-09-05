[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceUpdateRequest

# Class: UsersServiceUpdateRequest

Request message for updating an existing User record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the code, name, role ID, mobile role ID, email, work email, phone, birthday, joining date, address, city, state, country, pin code, blood group, shift group ID, attendance uom ID, department ID, payroll group ID, payroll tax group ID, payroll currency ID, basic pay amount, basic pay uom ID and other custom form fields
of an established User.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.UsersServiceUpdateRequest

## Hierarchy

- `Message`\<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

  ↳ **`UsersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceUpdateRequest.md#constructor)

### Properties

- [address](UsersServiceUpdateRequest.md#address)
- [attendanceUomId](UsersServiceUpdateRequest.md#attendanceuomid)
- [basicPayAmount](UsersServiceUpdateRequest.md#basicpayamount)
- [basicPayUomId](UsersServiceUpdateRequest.md#basicpayuomid)
- [birthday](UsersServiceUpdateRequest.md#birthday)
- [bloodGroup](UsersServiceUpdateRequest.md#bloodgroup)
- [city](UsersServiceUpdateRequest.md#city)
- [code](UsersServiceUpdateRequest.md#code)
- [country](UsersServiceUpdateRequest.md#country)
- [departmentId](UsersServiceUpdateRequest.md#departmentid)
- [email](UsersServiceUpdateRequest.md#email)
- [formData](UsersServiceUpdateRequest.md#formdata)
- [id](UsersServiceUpdateRequest.md#id)
- [joiningDate](UsersServiceUpdateRequest.md#joiningdate)
- [mobileRoleId](UsersServiceUpdateRequest.md#mobileroleid)
- [name](UsersServiceUpdateRequest.md#name)
- [notifyUsers](UsersServiceUpdateRequest.md#notifyusers)
- [payrollCurrencyId](UsersServiceUpdateRequest.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceUpdateRequest.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceUpdateRequest.md#payrolltaxgroupid)
- [phone](UsersServiceUpdateRequest.md#phone)
- [pinCode](UsersServiceUpdateRequest.md#pincode)
- [roleId](UsersServiceUpdateRequest.md#roleid)
- [shiftGroupId](UsersServiceUpdateRequest.md#shiftgroupid)
- [state](UsersServiceUpdateRequest.md#state)
- [userComment](UsersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](UsersServiceUpdateRequest.md#vaultfolderid)
- [workEmail](UsersServiceUpdateRequest.md#workemail)
- [fields](UsersServiceUpdateRequest.md#fields)
- [runtime](UsersServiceUpdateRequest.md#runtime)
- [typeName](UsersServiceUpdateRequest.md#typename)

### Methods

- [clone](UsersServiceUpdateRequest.md#clone)
- [equals](UsersServiceUpdateRequest.md#equals)
- [fromBinary](UsersServiceUpdateRequest.md#frombinary)
- [fromJson](UsersServiceUpdateRequest.md#fromjson)
- [fromJsonString](UsersServiceUpdateRequest.md#fromjsonstring)
- [getType](UsersServiceUpdateRequest.md#gettype)
- [toBinary](UsersServiceUpdateRequest.md#tobinary)
- [toJSON](UsersServiceUpdateRequest.md#tojson)
- [toJson](UsersServiceUpdateRequest.md#tojson-1)
- [toJsonString](UsersServiceUpdateRequest.md#tojsonstring)
- [equals](UsersServiceUpdateRequest.md#equals-1)
- [fromBinary](UsersServiceUpdateRequest.md#frombinary-1)
- [fromJson](UsersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](UsersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceUpdateRequest**(`data?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Overrides

Message\&lt;UsersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:1156](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1156)

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

[src/users.scailo_pb.ts:932](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L932)

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

[src/users.scailo_pb.ts:1044](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1044)

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

[src/users.scailo_pb.ts:1124](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1124)

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

[src/users.scailo_pb.ts:1140](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1140)

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

[src/users.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L900)

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

[src/users.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1012)

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

[src/users.scailo_pb.ts:948](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L948)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.

**`Example`**

```ts
"EMP-2026-992"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

[src/users.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L788)

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

[src/users.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L980)

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

[src/users.scailo_pb.ts:1060](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1060)

___

### email

• `Optional` **email**: `string`

**`Optional`**

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

from field: optional string email = 16;

#### Defined in

[src/users.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L852)

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

[src/users.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1154)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/users.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L744)

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

[src/users.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L916)

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

[src/users.scailo_pb.ts:836](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L836)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or full legal name of the user as recognized on statutory documentation.

**`Example`**

```ts
"Jane Doe"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 12;

#### Defined in

[src/users.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L804)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/users.scailo_pb.ts:756](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L756)

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

[src/users.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1108)

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

[src/users.scailo_pb.ts:1076](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1076)

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

[src/users.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1092)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary telephone contact or mobile line number assigned to the account profile.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.*

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: optional string phone = 18;

#### Defined in

[src/users.scailo_pb.ts:884](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L884)

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

[src/users.scailo_pb.ts:996](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L996)

___

### roleId

• `Optional` **roleId**: `bigint`

**`Optional`**

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

from field: optional uint64 role_id = 14;

#### Defined in

[src/users.scailo_pb.ts:820](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L820)

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

[src/users.scailo_pb.ts:1028](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1028)

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

[src/users.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L964)

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

from field: optional string user_comment = 1;

#### Defined in

[src/users.scailo_pb.ts:728](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L728)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/users.scailo_pb.ts:772](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L772)

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

[src/users.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L868)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1163)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1161)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceUpdateRequest"``

#### Defined in

[src/users.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1162)

## Methods

### clone

▸ **clone**(): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`\<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`\<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`\<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1206)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users.scailo_pb.ts:1194](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1194)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users.scailo_pb.ts:1198](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1198)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users.scailo_pb.ts:1202](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/users.scailo_pb.ts#L1202)
