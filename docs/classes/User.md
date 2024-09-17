[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / User

# Class: User

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.User

## Hierarchy

- `Message`\<[`User`](User.md)\>

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Properties

- [address](User.md#address)
- [approvalMetadata](User.md#approvalmetadata)
- [attendanceUomId](User.md#attendanceuomid)
- [basicPayAmount](User.md#basicpayamount)
- [basicPayUomId](User.md#basicpayuomid)
- [birthday](User.md#birthday)
- [bloodGroup](User.md#bloodgroup)
- [city](User.md#city)
- [code](User.md#code)
- [country](User.md#country)
- [departmentId](User.md#departmentid)
- [email](User.md#email)
- [entityUuid](User.md#entityuuid)
- [formData](User.md#formdata)
- [joiningDate](User.md#joiningdate)
- [logs](User.md#logs)
- [metadata](User.md#metadata)
- [mfaStatus](User.md#mfastatus)
- [mobileRoleId](User.md#mobileroleid)
- [name](User.md#name)
- [payrollCurrencyId](User.md#payrollcurrencyid)
- [payrollGroupId](User.md#payrollgroupid)
- [payrollTaxGroupId](User.md#payrolltaxgroupid)
- [phone](User.md#phone)
- [pinCode](User.md#pincode)
- [roleId](User.md#roleid)
- [shiftGroupId](User.md#shiftgroupid)
- [state](User.md#state)
- [status](User.md#status)
- [userType](User.md#usertype)
- [username](User.md#username)
- [vaultFolderId](User.md#vaultfolderid)
- [workEmail](User.md#workemail)
- [fields](User.md#fields)
- [runtime](User.md#runtime)
- [typeName](User.md#typename)

### Methods

- [clone](User.md#clone)
- [equals](User.md#equals)
- [fromBinary](User.md#frombinary)
- [fromJson](User.md#fromjson)
- [fromJsonString](User.md#fromjsonstring)
- [getType](User.md#gettype)
- [toBinary](User.md#tobinary)
- [toJSON](User.md#tojson)
- [toJson](User.md#tojson-1)
- [toJsonString](User.md#tojsonstring)
- [equals](User.md#equals-1)
- [fromBinary](User.md#frombinary-1)
- [fromJson](User.md#fromjson-1)
- [fromJsonString](User.md#fromjsonstring-1)

## Constructors

### constructor

• **new User**(`data?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`User`](User.md)\> |

#### Returns

[`User`](User.md)

#### Overrides

Message\&lt;User\&gt;.constructor

#### Defined in

src/users.scailo_pb.ts:923

## Properties

### address

• **address**: `string` = `""`

The address of the user

**`Generated`**

from field: string address = 32;

#### Defined in

src/users.scailo_pb.ts:816

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/users.scailo_pb.ts:711

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: uint64 attendance_uom_id = 51;

#### Defined in

src/users.scailo_pb.ts:865

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount of the user (in cents)

**`Generated`**

from field: uint64 basic_pay_amount = 56;

#### Defined in

src/users.scailo_pb.ts:900

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: uint64 basic_pay_uom_id = 57;

#### Defined in

src/users.scailo_pb.ts:907

___

### birthday

• **birthday**: `string` = `""`

The birthday of the user

**`Generated`**

from field: string birthday = 30;

#### Defined in

src/users.scailo_pb.ts:802

___

### bloodGroup

• **bloodGroup**: `string` = `""`

THe Blood Group of the user

**`Generated`**

from field: string blood_group = 37;

#### Defined in

src/users.scailo_pb.ts:851

___

### city

• **city**: `string` = `""`

The city of residence

**`Generated`**

from field: string city = 33;

#### Defined in

src/users.scailo_pb.ts:823

___

### code

• **code**: `string` = `""`

The unique employee code by which the user is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/users.scailo_pb.ts:753

___

### country

• **country**: `string` = `""`

The country of residence

**`Generated`**

from field: string country = 35;

#### Defined in

src/users.scailo_pb.ts:837

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department

**`Generated`**

from field: uint64 department_id = 52;

#### Defined in

src/users.scailo_pb.ts:872

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 16;

#### Defined in

src/users.scailo_pb.ts:781

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/users.scailo_pb.ts:697

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 70;

#### Defined in

src/users.scailo_pb.ts:921

___

### joiningDate

• **joiningDate**: `string` = `""`

The joining date of the user

**`Generated`**

from field: string joining_date = 31;

#### Defined in

src/users.scailo_pb.ts:809

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this user

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/users.scailo_pb.ts:725

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/users.scailo_pb.ts:704

___

### mfaStatus

• **mfaStatus**: `boolean` = `false`

Stores if MFA has been enabled by the user

**`Generated`**

from field: bool mfa_status = 60;

#### Defined in

src/users.scailo_pb.ts:914

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

The associated mobile role ID

**`Generated`**

from field: uint64 mobile_role_id = 15;

#### Defined in

src/users.scailo_pb.ts:774

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 12;

#### Defined in

src/users.scailo_pb.ts:760

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: uint64 payroll_currency_id = 55;

#### Defined in

src/users.scailo_pb.ts:893

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: uint64 payroll_group_id = 53;

#### Defined in

src/users.scailo_pb.ts:879

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: uint64 payroll_tax_group_id = 54;

#### Defined in

src/users.scailo_pb.ts:886

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 18;

#### Defined in

src/users.scailo_pb.ts:795

___

### pinCode

• **pinCode**: `string` = `""`

THe PIN Code of residence

**`Generated`**

from field: string pin_code = 36;

#### Defined in

src/users.scailo_pb.ts:844

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: uint64 role_id = 14;

#### Defined in

src/users.scailo_pb.ts:767

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: uint64 shift_group_id = 50;

#### Defined in

src/users.scailo_pb.ts:858

___

### state

• **state**: `string` = `""`

The state of residence

**`Generated`**

from field: string state = 34;

#### Defined in

src/users.scailo_pb.ts:830

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this user

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/users.scailo_pb.ts:718

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

Stores the user type

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

src/users.scailo_pb.ts:732

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 10;

#### Defined in

src/users.scailo_pb.ts:746

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/users.scailo_pb.ts:739

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 17;

#### Defined in

src/users.scailo_pb.ts:788

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/users.scailo_pb.ts:930

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/users.scailo_pb.ts:928

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.User"``

#### Defined in

src/users.scailo_pb.ts:929

## Methods

### clone

▸ **clone**(): [`User`](User.md)

Create a deep copy.

#### Returns

[`User`](User.md)

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
| `other` | `undefined` \| ``null`` \| [`User`](User.md) \| `PlainMessage`\<[`User`](User.md)\> |

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

▸ **getType**(): `MessageType`\<[`User`](User.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`User`](User.md)\>

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
| `a` | `undefined` \| [`User`](User.md) \| `PlainMessage`\<[`User`](User.md)\> |
| `b` | `undefined` \| [`User`](User.md) \| `PlainMessage`\<[`User`](User.md)\> |

#### Returns

`boolean`

#### Defined in

src/users.scailo_pb.ts:978

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

src/users.scailo_pb.ts:966

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

src/users.scailo_pb.ts:970

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

src/users.scailo_pb.ts:974
