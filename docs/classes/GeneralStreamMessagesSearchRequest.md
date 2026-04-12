[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamMessagesSearchRequest

# Class: GeneralStreamMessagesSearchRequest

Describes the request payload to retrieve messages.

**`Generated`**

from message Scailo.GeneralStreamMessagesSearchRequest

## Hierarchy

- `Message`\<[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)\>

  ↳ **`GeneralStreamMessagesSearchRequest`**

## Table of contents

### Constructors

- [constructor](GeneralStreamMessagesSearchRequest.md#constructor)

### Properties

- [count](GeneralStreamMessagesSearchRequest.md#count)
- [entityUuid](GeneralStreamMessagesSearchRequest.md#entityuuid)
- [generalStreamId](GeneralStreamMessagesSearchRequest.md#generalstreamid)
- [isActive](GeneralStreamMessagesSearchRequest.md#isactive)
- [messageType](GeneralStreamMessagesSearchRequest.md#messagetype)
- [offset](GeneralStreamMessagesSearchRequest.md#offset)
- [responseToMessageUuid](GeneralStreamMessagesSearchRequest.md#responsetomessageuuid)
- [searchKey](GeneralStreamMessagesSearchRequest.md#searchkey)
- [sortKey](GeneralStreamMessagesSearchRequest.md#sortkey)
- [sortOrder](GeneralStreamMessagesSearchRequest.md#sortorder)
- [fields](GeneralStreamMessagesSearchRequest.md#fields)
- [runtime](GeneralStreamMessagesSearchRequest.md#runtime)
- [typeName](GeneralStreamMessagesSearchRequest.md#typename)

### Methods

- [clone](GeneralStreamMessagesSearchRequest.md#clone)
- [equals](GeneralStreamMessagesSearchRequest.md#equals)
- [fromBinary](GeneralStreamMessagesSearchRequest.md#frombinary)
- [fromJson](GeneralStreamMessagesSearchRequest.md#fromjson)
- [fromJsonString](GeneralStreamMessagesSearchRequest.md#fromjsonstring)
- [getType](GeneralStreamMessagesSearchRequest.md#gettype)
- [toBinary](GeneralStreamMessagesSearchRequest.md#tobinary)
- [toJSON](GeneralStreamMessagesSearchRequest.md#tojson)
- [toJson](GeneralStreamMessagesSearchRequest.md#tojson-1)
- [toJsonString](GeneralStreamMessagesSearchRequest.md#tojsonstring)
- [equals](GeneralStreamMessagesSearchRequest.md#equals-1)
- [fromBinary](GeneralStreamMessagesSearchRequest.md#frombinary-1)
- [fromJson](GeneralStreamMessagesSearchRequest.md#fromjson-1)
- [fromJsonString](GeneralStreamMessagesSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamMessagesSearchRequest**(`data?`): [`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)\> |

#### Returns

[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

#### Overrides

Message\&lt;GeneralStreamMessagesSearchRequest\&gt;.constructor

#### Defined in

[src/general_streams.scailo_pb.ts:1705](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1705)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/general_streams.scailo_pb.ts:1621](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1621)

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

from field: string entity_uuid = 6;

#### Defined in

[src/general_streams.scailo_pb.ts:1675](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1675)

___

### generalStreamId

• **generalStreamId**: `bigint` = `protoInt64.zero`

The ID of the general stream

**`Generated`**

from field: uint64 general_stream_id = 20;

#### Defined in

[src/general_streams.scailo_pb.ts:1689](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1689)

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

[src/general_streams.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1605)

___

### messageType

• **messageType**: [`GENERAL_STREAM_MESSAGE_TYPE`](../enums/GENERAL_STREAM_MESSAGE_TYPE.md) = `GENERAL_STREAM_MESSAGE_TYPE.GENERAL_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED`

The type of the message

**`Generated`**

from field: Scailo.GENERAL_STREAM_MESSAGE_TYPE message_type = 8;

#### Defined in

[src/general_streams.scailo_pb.ts:1682](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1682)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/general_streams.scailo_pb.ts:1637](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1637)

___

### responseToMessageUuid

• **responseToMessageUuid**: `string` = `""`

Stores the optional UUID of the message that this message is a response to

**`Generated`**

from field: string response_to_message_uuid = 30;

#### Defined in

[src/general_streams.scailo_pb.ts:1696](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1696)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/general_streams.scailo_pb.ts:1703](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1703)

___

### sortKey

• **sortKey**: [`GENERAL_STREAM_MESSAGE_SORT_KEY`](../enums/GENERAL_STREAM_MESSAGE_SORT_KEY.md) = `GENERAL_STREAM_MESSAGE_SORT_KEY.GENERAL_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GENERAL_STREAM_MESSAGE_SORT_KEY sort_key = 5;

#### Defined in

[src/general_streams.scailo_pb.ts:1659](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1659)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/general_streams.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1649)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/general_streams.scailo_pb.ts:1712](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1712)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/general_streams.scailo_pb.ts:1710](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1710)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamMessagesSearchRequest"``

#### Defined in

[src/general_streams.scailo_pb.ts:1711](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1711)

## Methods

### clone

▸ **clone**(): [`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

Create a deep copy.

#### Returns

[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)\>

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
| `a` | `undefined` \| [`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)\> |
| `b` | `undefined` \| [`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/general_streams.scailo_pb.ts:1737](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1737)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1725)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:1729](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1729)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamMessagesSearchRequest`](GeneralStreamMessagesSearchRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:1733](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_streams.scailo_pb.ts#L1733)
