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

[src/users.scailo_pb.ts:408](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L408)

## Properties

### address

• **address**: `string` = `""`

[Optional] Primary residential or mailing address.

**`Generated`**

from field: string address = 32;

#### Defined in

[src/users.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L304)

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

[Optional] Unit of Measure (UOM) for tracking attendance duration.

**`Generated`**

from field: uint64 attendance_uom_id = 51;

#### Defined in

[src/users.scailo_pb.ts:355](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L355)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

[Optional] The base salary amount in the **smallest currency unit**.
For USD, 500000 represents $5,000.00.

**`Generated`**

from field: uint64 basic_pay_amount = 56;

#### Defined in

[src/users.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L391)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

[Optional] The UOM ID for the basic pay (e.g., Per Month, Per Year).

**`Generated`**

from field: uint64 basic_pay_uom_id = 57;

#### Defined in

[src/users.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L398)

___

### birthday

• **birthday**: `string` = `""`

[Optional] The user's date of birth.
**Format:** `Day Month Date Year`
Example: "Mon Jan 02 2006"

**`Generated`**

from field: string birthday = 30;

#### Defined in

[src/users.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L288)

___

### bloodGroup

• **bloodGroup**: `string` = `""`

[Optional] The user's blood group.
Example: "O+", "A-", "B+"

**`Generated`**

from field: string blood_group = 37;

#### Defined in

[src/users.scailo_pb.ts:341](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L341)

___

### city

• **city**: `string` = `""`

[Optional] City of residence.

**`Generated`**

from field: string city = 33;

#### Defined in

[src/users.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L311)

___

### code

• **code**: `string` = `""`

[Required] The unique employee or payroll code.
Used for cross-referencing with external HR or ERP systems.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/users.scailo_pb.ts:227](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L227)

___

### country

• **country**: `string` = `""`

[Optional] Country of residence (ISO 3166-1 alpha-2 recommended).
Example: "US", "GB", "IN"

**`Generated`**

from field: string country = 35;

#### Defined in

[src/users.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L326)

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

[Optional] The department ID. Set to 0 for unassigned/general.

**`Generated`**

from field: uint64 department_id = 52;

#### Defined in

[src/users.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L362)

___

### email

• **email**: `string` = `""`

[Required] The primary email address for system notifications.
Example: "jane.doe@example.com"

**`Generated`**

from field: string email = 16;

#### Defined in

[src/users.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L264)

___

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 1;

#### Defined in

[src/users.scailo_pb.ts:180](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L180)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

[Optional] A collection of custom field data.
Use this for any organization-specific dynamic attributes.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 70;

#### Defined in

[src/users.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L406)

___

### joiningDate

• **joiningDate**: `string` = `""`

[Optional] The official start date for the user.
**Format:** `Day Month Date Year`
Example: "Wed Oct 25 2023"

**`Generated`**

from field: string joining_date = 31;

#### Defined in

[src/users.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L297)

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

[Optional] The secondary Role ID for mobile application access.

**`Generated`**

from field: uint64 mobile_role_id = 15;

#### Defined in

[src/users.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L256)

___

### name

• **name**: `string` = `""`

[Required] The full legal name of the user.

**`Generated`**

from field: string name = 12;

#### Defined in

[src/users.scailo_pb.ts:234](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L234)

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

[Optional] The ID of the currency for the user's base salary.

**`Generated`**

from field: uint64 payroll_currency_id = 55;

#### Defined in

[src/users.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L383)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

[Optional] The payroll group used for salary batching.

**`Generated`**

from field: uint64 payroll_group_id = 53;

#### Defined in

[src/users.scailo_pb.ts:369](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L369)

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

[Optional] The tax group used for statutory deductions.

**`Generated`**

from field: uint64 payroll_tax_group_id = 54;

#### Defined in

[src/users.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L376)

___

### phone

• **phone**: `string` = `""`

[Required] The primary contact number (e.g., Mobile or Landline).
Recommended format: E.164 (e.g., "+12125550123").

**`Generated`**

from field: string phone = 18;

#### Defined in

[src/users.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L279)

___

### pinCode

• **pinCode**: `string` = `""`

[Optional] Postal or ZIP code.

**`Generated`**

from field: string pin_code = 36;

#### Defined in

[src/users.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L333)

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

[Required] The plain text password for the account.
This value is hashed before storage.

**`Generated`**

from field: string plain_text_password = 13;

#### Defined in

[src/users.scailo_pb.ts:242](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L242)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

[Required] The primary security Role ID (System/Web access).

**`Generated`**

from field: uint64 role_id = 14;

#### Defined in

[src/users.scailo_pb.ts:249](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L249)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

[Optional] Assigned shift group for attendance scheduling.

**`Generated`**

from field: uint64 shift_group_id = 50;

#### Defined in

[src/users.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L348)

___

### state

• **state**: `string` = `""`

[Optional] State, Province, or Region of residence.

**`Generated`**

from field: string state = 34;

#### Defined in

[src/users.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L318)

___

### userComment

• **userComment**: `string` = `""`

[Optional] Internal notes or audit comments for this creation event.
Maximum 500 characters.

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/users.scailo_pb.ts:188](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L188)

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

[Required] The classification of the user (e.g., CLIENT, EMPLOYEE, VENDOR).

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

[src/users.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L195)

___

### username

• **username**: `string` = `""`

[Required] The unique login identifier.
Must be at least 1 character and unique across the entity.

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users.scailo_pb.ts:219](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L219)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

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

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/users.scailo_pb.ts:211](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L211)

___

### workEmail

• **workEmail**: `string` = `""`

[Optional] The secondary/corporate work email address.

**`Generated`**

from field: string work_email = 17;

#### Defined in

[src/users.scailo_pb.ts:271](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L271)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L415)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L413)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceCreateRequest"``

#### Defined in

[src/users.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L414)

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

[src/users.scailo_pb.ts:460](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L460)

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

[src/users.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L448)

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

[src/users.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L452)

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

[src/users.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/users.scailo_pb.ts#L456)
