[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersServiceSearchAllReq

# Class: LedgersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.LedgersServiceSearchAllReq

## Hierarchy

- `Message`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\>

  ↳ **`LedgersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](LedgersServiceSearchAllReq.md#constructor)

### Properties

- [count](LedgersServiceSearchAllReq.md#count)
- [entityUuid](LedgersServiceSearchAllReq.md#entityuuid)
- [isActive](LedgersServiceSearchAllReq.md#isactive)
- [isLeaf](LedgersServiceSearchAllReq.md#isleaf)
- [offset](LedgersServiceSearchAllReq.md#offset)
- [parentLedgerId](LedgersServiceSearchAllReq.md#parentledgerid)
- [searchKey](LedgersServiceSearchAllReq.md#searchkey)
- [sortKey](LedgersServiceSearchAllReq.md#sortkey)
- [sortOrder](LedgersServiceSearchAllReq.md#sortorder)
- [status](LedgersServiceSearchAllReq.md#status)
- [fields](LedgersServiceSearchAllReq.md#fields)
- [runtime](LedgersServiceSearchAllReq.md#runtime)
- [typeName](LedgersServiceSearchAllReq.md#typename)

### Methods

- [clone](LedgersServiceSearchAllReq.md#clone)
- [equals](LedgersServiceSearchAllReq.md#equals)
- [fromBinary](LedgersServiceSearchAllReq.md#frombinary)
- [fromJson](LedgersServiceSearchAllReq.md#fromjson)
- [fromJsonString](LedgersServiceSearchAllReq.md#fromjsonstring)
- [getType](LedgersServiceSearchAllReq.md#gettype)
- [toBinary](LedgersServiceSearchAllReq.md#tobinary)
- [toJSON](LedgersServiceSearchAllReq.md#tojson)
- [toJson](LedgersServiceSearchAllReq.md#tojson-1)
- [toJsonString](LedgersServiceSearchAllReq.md#tojsonstring)
- [equals](LedgersServiceSearchAllReq.md#equals-1)
- [fromBinary](LedgersServiceSearchAllReq.md#frombinary-1)
- [fromJson](LedgersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](LedgersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersServiceSearchAllReq**(`data?`): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\> |

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Overrides

Message\&lt;LedgersServiceSearchAllReq\&gt;.constructor

#### Defined in

src/ledgers.scailo_pb.ts:970

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/ledgers.scailo_pb.ts:912

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/ledgers.scailo_pb.ts:940

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/ledgers.scailo_pb.ts:905

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 23;

#### Defined in

src/ledgers.scailo_pb.ts:968

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/ledgers.scailo_pb.ts:919

___

### parentLedgerId

• **parentLedgerId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)

**`Generated`**

from field: uint64 parent_ledger_id = 22;

#### Defined in

src/ledgers.scailo_pb.ts:961

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/ledgers.scailo_pb.ts:954

___

### sortKey

• **sortKey**: [`LEDGER_SORT_KEY`](../enums/LEDGER_SORT_KEY.md) = `LEDGER_SORT_KEY.LEDGER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LEDGER_SORT_KEY sort_key = 5;

#### Defined in

src/ledgers.scailo_pb.ts:933

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/ledgers.scailo_pb.ts:926

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/ledgers.scailo_pb.ts:947

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/ledgers.scailo_pb.ts:977

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/ledgers.scailo_pb.ts:975

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServiceSearchAllReq"``

#### Defined in

src/ledgers.scailo_pb.ts:976

## Methods

### clone

▸ **clone**(): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md) \| `PlainMessage`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md) \| `PlainMessage`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md) \| `PlainMessage`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/ledgers.scailo_pb.ts:1002

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Defined in

src/ledgers.scailo_pb.ts:990

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Defined in

src/ledgers.scailo_pb.ts:994

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Defined in

src/ledgers.scailo_pb.ts:998
