[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersServiceCountReq

# Class: LedgersServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LedgersServiceCountReq

## Hierarchy

- `Message`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\>

  ↳ **`LedgersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LedgersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](LedgersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](LedgersServiceCountReq.md#approvedonend)
- [approvedOnStart](LedgersServiceCountReq.md#approvedonstart)
- [approverRoleId](LedgersServiceCountReq.md#approverroleid)
- [code](LedgersServiceCountReq.md#code)
- [creationTimestampEnd](LedgersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LedgersServiceCountReq.md#creationtimestampstart)
- [entityUuid](LedgersServiceCountReq.md#entityuuid)
- [isActive](LedgersServiceCountReq.md#isactive)
- [isLeaf](LedgersServiceCountReq.md#isleaf)
- [modificationTimestampEnd](LedgersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LedgersServiceCountReq.md#modificationtimestampstart)
- [name](LedgersServiceCountReq.md#name)
- [parentLedgerId](LedgersServiceCountReq.md#parentledgerid)
- [status](LedgersServiceCountReq.md#status)
- [fields](LedgersServiceCountReq.md#fields)
- [runtime](LedgersServiceCountReq.md#runtime)
- [typeName](LedgersServiceCountReq.md#typename)

### Methods

- [clone](LedgersServiceCountReq.md#clone)
- [equals](LedgersServiceCountReq.md#equals)
- [fromBinary](LedgersServiceCountReq.md#frombinary)
- [fromJson](LedgersServiceCountReq.md#fromjson)
- [fromJsonString](LedgersServiceCountReq.md#fromjsonstring)
- [getType](LedgersServiceCountReq.md#gettype)
- [toBinary](LedgersServiceCountReq.md#tobinary)
- [toJSON](LedgersServiceCountReq.md#tojson)
- [toJson](LedgersServiceCountReq.md#tojson-1)
- [toJsonString](LedgersServiceCountReq.md#tojsonstring)
- [equals](LedgersServiceCountReq.md#equals-1)
- [fromBinary](LedgersServiceCountReq.md#frombinary-1)
- [fromJson](LedgersServiceCountReq.md#fromjson-1)
- [fromJsonString](LedgersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersServiceCountReq**(`data?`): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\> |

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Overrides

Message\&lt;LedgersServiceCountReq\&gt;.constructor

#### Defined in

src/ledgers.scailo_pb.ts:851

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/ledgers.scailo_pb.ts:814

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/ledgers.scailo_pb.ts:807

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/ledgers.scailo_pb.ts:800

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/ledgers.scailo_pb.ts:821

___

### code

• **code**: `string` = `""`

The unique code by which the ledger is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/ledgers.scailo_pb.ts:835

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/ledgers.scailo_pb.ts:765

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/ledgers.scailo_pb.ts:758

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/ledgers.scailo_pb.ts:786

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/ledgers.scailo_pb.ts:751

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 23;

#### Defined in

src/ledgers.scailo_pb.ts:849

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/ledgers.scailo_pb.ts:779

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/ledgers.scailo_pb.ts:772

___

### name

• **name**: `string` = `""`

The name of the ledger

**`Generated`**

from field: string name = 20;

#### Defined in

src/ledgers.scailo_pb.ts:828

___

### parentLedgerId

• **parentLedgerId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)

**`Generated`**

from field: uint64 parent_ledger_id = 22;

#### Defined in

src/ledgers.scailo_pb.ts:842

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this ledger

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/ledgers.scailo_pb.ts:793

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/ledgers.scailo_pb.ts:858

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/ledgers.scailo_pb.ts:856

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServiceCountReq"``

#### Defined in

src/ledgers.scailo_pb.ts:857

## Methods

### clone

▸ **clone**(): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

Create a deep copy.

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersServiceCountReq`](LedgersServiceCountReq.md) \| `PlainMessage`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LedgersServiceCountReq`](LedgersServiceCountReq.md) \| `PlainMessage`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\> |
| `b` | `undefined` \| [`LedgersServiceCountReq`](LedgersServiceCountReq.md) \| `PlainMessage`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/ledgers.scailo_pb.ts:888

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Defined in

src/ledgers.scailo_pb.ts:876

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Defined in

src/ledgers.scailo_pb.ts:880

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Defined in

src/ledgers.scailo_pb.ts:884
