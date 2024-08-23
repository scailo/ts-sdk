[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParamsServiceFilterReq

# Class: PayrollParamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PayrollParamsServiceFilterReq

## Hierarchy

- `Message`\<[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)\>

  ↳ **`PayrollParamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PayrollParamsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PayrollParamsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PayrollParamsServiceFilterReq.md#approvedonend)
- [approvedOnStart](PayrollParamsServiceFilterReq.md#approvedonstart)
- [approverRoleId](PayrollParamsServiceFilterReq.md#approverroleid)
- [code](PayrollParamsServiceFilterReq.md#code)
- [completedOnEnd](PayrollParamsServiceFilterReq.md#completedonend)
- [completedOnStart](PayrollParamsServiceFilterReq.md#completedonstart)
- [count](PayrollParamsServiceFilterReq.md#count)
- [creationTimestampEnd](PayrollParamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PayrollParamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](PayrollParamsServiceFilterReq.md#entityuuid)
- [isActive](PayrollParamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PayrollParamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PayrollParamsServiceFilterReq.md#modificationtimestampstart)
- [name](PayrollParamsServiceFilterReq.md#name)
- [offset](PayrollParamsServiceFilterReq.md#offset)
- [sortKey](PayrollParamsServiceFilterReq.md#sortkey)
- [sortOrder](PayrollParamsServiceFilterReq.md#sortorder)
- [status](PayrollParamsServiceFilterReq.md#status)
- [fields](PayrollParamsServiceFilterReq.md#fields)
- [runtime](PayrollParamsServiceFilterReq.md#runtime)
- [typeName](PayrollParamsServiceFilterReq.md#typename)

### Methods

- [clone](PayrollParamsServiceFilterReq.md#clone)
- [equals](PayrollParamsServiceFilterReq.md#equals)
- [fromBinary](PayrollParamsServiceFilterReq.md#frombinary)
- [fromJson](PayrollParamsServiceFilterReq.md#fromjson)
- [fromJsonString](PayrollParamsServiceFilterReq.md#fromjsonstring)
- [getType](PayrollParamsServiceFilterReq.md#gettype)
- [toBinary](PayrollParamsServiceFilterReq.md#tobinary)
- [toJSON](PayrollParamsServiceFilterReq.md#tojson)
- [toJson](PayrollParamsServiceFilterReq.md#tojson-1)
- [toJsonString](PayrollParamsServiceFilterReq.md#tojsonstring)
- [equals](PayrollParamsServiceFilterReq.md#equals-1)
- [fromBinary](PayrollParamsServiceFilterReq.md#frombinary-1)
- [fromJson](PayrollParamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](PayrollParamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParamsServiceFilterReq**(`data?`): [`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)\> |

#### Returns

[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

#### Overrides

Message\&lt;PayrollParamsServiceFilterReq\&gt;.constructor

#### Defined in

src/payroll_params.scailo_pb.ts:685

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/payroll_params.scailo_pb.ts:648

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/payroll_params.scailo_pb.ts:641

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/payroll_params.scailo_pb.ts:634

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/payroll_params.scailo_pb.ts:655

___

### code

• **code**: `string` = `""`

The payroll param code

**`Generated`**

from field: string code = 21;

#### Defined in

src/payroll_params.scailo_pb.ts:683

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/payroll_params.scailo_pb.ts:669

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/payroll_params.scailo_pb.ts:662

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/payroll_params.scailo_pb.ts:564

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/payroll_params.scailo_pb.ts:599

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/payroll_params.scailo_pb.ts:592

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/payroll_params.scailo_pb.ts:620

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/payroll_params.scailo_pb.ts:557

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/payroll_params.scailo_pb.ts:613

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/payroll_params.scailo_pb.ts:606

___

### name

• **name**: `string` = `""`

The name of the payroll param

**`Generated`**

from field: string name = 20;

#### Defined in

src/payroll_params.scailo_pb.ts:676

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/payroll_params.scailo_pb.ts:571

___

### sortKey

• **sortKey**: [`PAYROLL_PARAM_SORT_KEY`](../enums/PAYROLL_PARAM_SORT_KEY.md) = `PAYROLL_PARAM_SORT_KEY.PAYROLL_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PAYROLL_PARAM_SORT_KEY sort_key = 5;

#### Defined in

src/payroll_params.scailo_pb.ts:585

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/payroll_params.scailo_pb.ts:578

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this payroll param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/payroll_params.scailo_pb.ts:627

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_params.scailo_pb.ts:692

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_params.scailo_pb.ts:690

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParamsServiceFilterReq"``

#### Defined in

src/payroll_params.scailo_pb.ts:691

## Methods

### clone

▸ **clone**(): [`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md) \| `PlainMessage`\<[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md) \| `PlainMessage`\<[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md) \| `PlainMessage`\<[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_params.scailo_pb.ts:726

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

#### Defined in

src/payroll_params.scailo_pb.ts:714

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

#### Defined in

src/payroll_params.scailo_pb.ts:718

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceFilterReq`](PayrollParamsServiceFilterReq.md)

#### Defined in

src/payroll_params.scailo_pb.ts:722
