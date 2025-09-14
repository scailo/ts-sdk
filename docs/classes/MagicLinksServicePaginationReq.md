[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinksServicePaginationReq

# Class: MagicLinksServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.MagicLinksServicePaginationReq

## Hierarchy

- `Message`\<[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)\>

  ↳ **`MagicLinksServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](MagicLinksServicePaginationReq.md#constructor)

### Properties

- [count](MagicLinksServicePaginationReq.md#count)
- [isActive](MagicLinksServicePaginationReq.md#isactive)
- [offset](MagicLinksServicePaginationReq.md#offset)
- [sortKey](MagicLinksServicePaginationReq.md#sortkey)
- [sortOrder](MagicLinksServicePaginationReq.md#sortorder)
- [fields](MagicLinksServicePaginationReq.md#fields)
- [runtime](MagicLinksServicePaginationReq.md#runtime)
- [typeName](MagicLinksServicePaginationReq.md#typename)

### Methods

- [clone](MagicLinksServicePaginationReq.md#clone)
- [equals](MagicLinksServicePaginationReq.md#equals)
- [fromBinary](MagicLinksServicePaginationReq.md#frombinary)
- [fromJson](MagicLinksServicePaginationReq.md#fromjson)
- [fromJsonString](MagicLinksServicePaginationReq.md#fromjsonstring)
- [getType](MagicLinksServicePaginationReq.md#gettype)
- [toBinary](MagicLinksServicePaginationReq.md#tobinary)
- [toJSON](MagicLinksServicePaginationReq.md#tojson)
- [toJson](MagicLinksServicePaginationReq.md#tojson-1)
- [toJsonString](MagicLinksServicePaginationReq.md#tojsonstring)
- [equals](MagicLinksServicePaginationReq.md#equals-1)
- [fromBinary](MagicLinksServicePaginationReq.md#frombinary-1)
- [fromJson](MagicLinksServicePaginationReq.md#fromjson-1)
- [fromJsonString](MagicLinksServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinksServicePaginationReq**(`data?`): [`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)\> |

#### Returns

[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

#### Overrides

Message\&lt;MagicLinksServicePaginationReq\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:950

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/magic_links.scailo_pb.ts:927

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/magic_links.scailo_pb.ts:920

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/magic_links.scailo_pb.ts:934

___

### sortKey

• **sortKey**: [`MAGIC_LINK_SORT_KEY`](../enums/MAGIC_LINK_SORT_KEY.md) = `MAGIC_LINK_SORT_KEY.MAGIC_LINK_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.MAGIC_LINK_SORT_KEY sort_key = 5;

#### Defined in

src/magic_links.scailo_pb.ts:948

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/magic_links.scailo_pb.ts:941

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:957

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:955

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinksServicePaginationReq"``

#### Defined in

src/magic_links.scailo_pb.ts:956

## Methods

### clone

▸ **clone**(): [`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

Create a deep copy.

#### Returns

[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md) \| `PlainMessage`\<[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md) \| `PlainMessage`\<[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)\> |
| `b` | `undefined` \| [`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md) \| `PlainMessage`\<[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:977

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:965

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:969

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServicePaginationReq`](MagicLinksServicePaginationReq.md)

#### Defined in

src/magic_links.scailo_pb.ts:973
