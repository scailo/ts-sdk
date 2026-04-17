[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceCountReq

# Class: UsersServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.UsersServiceCountReq

## Hierarchy

- `Message`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

  ↳ **`UsersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](UsersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](UsersServiceCountReq.md#approvedonend)
- [approvedOnStart](UsersServiceCountReq.md#approvedonstart)
- [approverRoleId](UsersServiceCountReq.md#approverroleid)
- [attendanceUomId](UsersServiceCountReq.md#attendanceuomid)
- [basicPayUomId](UsersServiceCountReq.md#basicpayuomid)
- [clientId](UsersServiceCountReq.md#clientid)
- [code](UsersServiceCountReq.md#code)
- [creationTimestampEnd](UsersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](UsersServiceCountReq.md#creationtimestampstart)
- [departmentId](UsersServiceCountReq.md#departmentid)
- [email](UsersServiceCountReq.md#email)
- [entityUuid](UsersServiceCountReq.md#entityuuid)
- [formData](UsersServiceCountReq.md#formdata)
- [isActive](UsersServiceCountReq.md#isactive)
- [modificationTimestampEnd](UsersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](UsersServiceCountReq.md#modificationtimestampstart)
- [name](UsersServiceCountReq.md#name)
- [payrollCurrencyId](UsersServiceCountReq.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceCountReq.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceCountReq.md#payrolltaxgroupid)
- [phone](UsersServiceCountReq.md#phone)
- [roleId](UsersServiceCountReq.md#roleid)
- [shiftGroupId](UsersServiceCountReq.md#shiftgroupid)
- [status](UsersServiceCountReq.md#status)
- [userType](UsersServiceCountReq.md#usertype)
- [username](UsersServiceCountReq.md#username)
- [vendorId](UsersServiceCountReq.md#vendorid)
- [workEmail](UsersServiceCountReq.md#workemail)
- [fields](UsersServiceCountReq.md#fields)
- [runtime](UsersServiceCountReq.md#runtime)
- [typeName](UsersServiceCountReq.md#typename)

### Methods

- [clone](UsersServiceCountReq.md#clone)
- [equals](UsersServiceCountReq.md#equals)
- [fromBinary](UsersServiceCountReq.md#frombinary)
- [fromJson](UsersServiceCountReq.md#fromjson)
- [fromJsonString](UsersServiceCountReq.md#fromjsonstring)
- [getType](UsersServiceCountReq.md#gettype)
- [toBinary](UsersServiceCountReq.md#tobinary)
- [toJSON](UsersServiceCountReq.md#tojson)
- [toJson](UsersServiceCountReq.md#tojson-1)
- [toJsonString](UsersServiceCountReq.md#tojsonstring)
- [equals](UsersServiceCountReq.md#equals-1)
- [fromBinary](UsersServiceCountReq.md#frombinary-1)
- [fromJson](UsersServiceCountReq.md#fromjson-1)
- [fromJsonString](UsersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceCountReq**(`data?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Overrides

Message\&lt;UsersServiceCountReq\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:2104](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2104)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/users.scailo_pb.ts:1964](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1964)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/users.scailo_pb.ts:1948](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1948)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/users.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1932)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/users.scailo_pb.ts:1980](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1980)

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: uint64 attendance_uom_id = 27;

#### Defined in

[src/users.scailo_pb.ts:2036](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2036)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: uint64 basic_pay_uom_id = 32;

#### Defined in

[src/users.scailo_pb.ts:2071](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2071)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

Filter by the associated client ID (return all the users that belong to this client)

--------------------------------------------------------------------------------

**`Generated`**

from field: uint64 client_id = 71;

#### Defined in

[src/users.scailo_pb.ts:2095](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2095)

___

### code

• **code**: `string` = `""`

The unique code by which the user is classified

**`Generated`**

from field: string code = 22;

#### Defined in

[src/users.scailo_pb.ts:2001](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2001)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/users.scailo_pb.ts:1849](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1849)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/users.scailo_pb.ts:1833](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1833)

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department

**`Generated`**

from field: uint64 department_id = 28;

#### Defined in

[src/users.scailo_pb.ts:2043](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2043)

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 23;

#### Defined in

[src/users.scailo_pb.ts:2008](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2008)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/users.scailo_pb.ts:1904](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1904)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/users.scailo_pb.ts:2102](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2102)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/users.scailo_pb.ts:1817](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1817)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/users.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1881)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/users.scailo_pb.ts:1865](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1865)

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 21;

#### Defined in

[src/users.scailo_pb.ts:1994](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1994)

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: uint64 payroll_currency_id = 31;

#### Defined in

[src/users.scailo_pb.ts:2064](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2064)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: uint64 payroll_group_id = 29;

#### Defined in

[src/users.scailo_pb.ts:2050](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2050)

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: uint64 payroll_tax_group_id = 30;

#### Defined in

[src/users.scailo_pb.ts:2057](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2057)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 24;

#### Defined in

[src/users.scailo_pb.ts:2015](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2015)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: uint64 role_id = 25;

#### Defined in

[src/users.scailo_pb.ts:2022](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2022)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: uint64 shift_group_id = 26;

#### Defined in

[src/users.scailo_pb.ts:2029](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2029)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/users.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1916)

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

Stores the user type

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

[src/users.scailo_pb.ts:1888](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1888)

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 20;

#### Defined in

[src/users.scailo_pb.ts:1987](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L1987)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

--------------------------------------------------------------------------------
Filter by the associated vendor ID (return all the users that belong to this vendor)

**`Generated`**

from field: uint64 vendor_id = 70;

#### Defined in

[src/users.scailo_pb.ts:2086](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2086)

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 33;

#### Defined in

[src/users.scailo_pb.ts:2078](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2078)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:2111](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2111)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:2109](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2109)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceCountReq"``

#### Defined in

[src/users.scailo_pb.ts:2110](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2110)

## Methods

### clone

▸ **clone**(): [`UsersServiceCountReq`](UsersServiceCountReq.md)

Create a deep copy.

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |
| `b` | `undefined` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:2155](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2155)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

[src/users.scailo_pb.ts:2143](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2143)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

[src/users.scailo_pb.ts:2147](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2147)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

[src/users.scailo_pb.ts:2151](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/users.scailo_pb.ts#L2151)
