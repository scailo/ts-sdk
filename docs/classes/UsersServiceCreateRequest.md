[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceCreateRequest

# Class: UsersServiceCreateRequest

Describes the parameters necessary to create a record

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

[src/users.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L370)

## Properties

### address

• **address**: `string` = `""`

The address of the user

**`Generated`**

from field: string address = 32;

#### Defined in

[src/users.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L270)

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: uint64 attendance_uom_id = 51;

#### Defined in

[src/users.scailo_pb.ts:319](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L319)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount of the user (in cents)

**`Generated`**

from field: uint64 basic_pay_amount = 56;

#### Defined in

[src/users.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L354)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: uint64 basic_pay_uom_id = 57;

#### Defined in

[src/users.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L361)

___

### birthday

• **birthday**: `string` = `""`

The birthday of the user

**`Generated`**

from field: string birthday = 30;

#### Defined in

[src/users.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L256)

___

### bloodGroup

• **bloodGroup**: `string` = `""`

THe Blood Group of the user

**`Generated`**

from field: string blood_group = 37;

#### Defined in

[src/users.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L305)

___

### city

• **city**: `string` = `""`

The city of residence

**`Generated`**

from field: string city = 33;

#### Defined in

[src/users.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L277)

___

### code

• **code**: `string` = `""`

The unique employee code by which the user is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/users.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L200)

___

### country

• **country**: `string` = `""`

The country of residence

**`Generated`**

from field: string country = 35;

#### Defined in

[src/users.scailo_pb.ts:291](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L291)

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department (can be 0 to allow seamless transition)

**`Generated`**

from field: uint64 department_id = 52;

#### Defined in

[src/users.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L326)

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 16;

#### Defined in

[src/users.scailo_pb.ts:235](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L235)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/users.scailo_pb.ts:165](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L165)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 70;

#### Defined in

[src/users.scailo_pb.ts:368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L368)

___

### joiningDate

• **joiningDate**: `string` = `""`

The joining date of the user

**`Generated`**

from field: string joining_date = 31;

#### Defined in

[src/users.scailo_pb.ts:263](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L263)

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

The associated mobile role ID

**`Generated`**

from field: uint64 mobile_role_id = 15;

#### Defined in

[src/users.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L228)

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 12;

#### Defined in

[src/users.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L207)

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: uint64 payroll_currency_id = 55;

#### Defined in

[src/users.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L347)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: uint64 payroll_group_id = 53;

#### Defined in

[src/users.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L333)

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: uint64 payroll_tax_group_id = 54;

#### Defined in

[src/users.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L340)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 18;

#### Defined in

[src/users.scailo_pb.ts:249](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L249)

___

### pinCode

• **pinCode**: `string` = `""`

THe PIN Code of residence

**`Generated`**

from field: string pin_code = 36;

#### Defined in

[src/users.scailo_pb.ts:298](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L298)

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

The plain text password using which the user can login

**`Generated`**

from field: string plain_text_password = 13;

#### Defined in

[src/users.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L214)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: uint64 role_id = 14;

#### Defined in

[src/users.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L221)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: uint64 shift_group_id = 50;

#### Defined in

[src/users.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L312)

___

### state

• **state**: `string` = `""`

The state of residence

**`Generated`**

from field: string state = 34;

#### Defined in

[src/users.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L284)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/users.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L172)

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

Stores the user type

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

[src/users.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L179)

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users.scailo_pb.ts:193](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L193)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/users.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L186)

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 17;

#### Defined in

[src/users.scailo_pb.ts:242](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L242)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L377)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L375)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceCreateRequest"``

#### Defined in

[src/users.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L376)

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

[src/users.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L422)

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

[src/users.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L410)

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

[src/users.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L414)

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

[src/users.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/users.scailo_pb.ts#L418)
