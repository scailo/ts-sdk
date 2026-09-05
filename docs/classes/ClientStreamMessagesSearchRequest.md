[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamMessagesSearchRequest

# Class: ClientStreamMessagesSearchRequest

Describes the request payload to retrieve messages.

**`Generated`**

from message Scailo.ClientStreamMessagesSearchRequest

## Hierarchy

- `Message`\<[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)\>

  ↳ **`ClientStreamMessagesSearchRequest`**

## Table of contents

### Constructors

- [constructor](ClientStreamMessagesSearchRequest.md#constructor)

### Properties

- [clientStreamId](ClientStreamMessagesSearchRequest.md#clientstreamid)
- [count](ClientStreamMessagesSearchRequest.md#count)
- [entityUuid](ClientStreamMessagesSearchRequest.md#entityuuid)
- [isActive](ClientStreamMessagesSearchRequest.md#isactive)
- [messageType](ClientStreamMessagesSearchRequest.md#messagetype)
- [offset](ClientStreamMessagesSearchRequest.md#offset)
- [responseToMessageUuid](ClientStreamMessagesSearchRequest.md#responsetomessageuuid)
- [searchKey](ClientStreamMessagesSearchRequest.md#searchkey)
- [sortKey](ClientStreamMessagesSearchRequest.md#sortkey)
- [sortOrder](ClientStreamMessagesSearchRequest.md#sortorder)
- [fields](ClientStreamMessagesSearchRequest.md#fields)
- [runtime](ClientStreamMessagesSearchRequest.md#runtime)
- [typeName](ClientStreamMessagesSearchRequest.md#typename)

### Methods

- [clone](ClientStreamMessagesSearchRequest.md#clone)
- [equals](ClientStreamMessagesSearchRequest.md#equals)
- [fromBinary](ClientStreamMessagesSearchRequest.md#frombinary)
- [fromJson](ClientStreamMessagesSearchRequest.md#fromjson)
- [fromJsonString](ClientStreamMessagesSearchRequest.md#fromjsonstring)
- [getType](ClientStreamMessagesSearchRequest.md#gettype)
- [toBinary](ClientStreamMessagesSearchRequest.md#tobinary)
- [toJSON](ClientStreamMessagesSearchRequest.md#tojson)
- [toJson](ClientStreamMessagesSearchRequest.md#tojson-1)
- [toJsonString](ClientStreamMessagesSearchRequest.md#tojsonstring)
- [equals](ClientStreamMessagesSearchRequest.md#equals-1)
- [fromBinary](ClientStreamMessagesSearchRequest.md#frombinary-1)
- [fromJson](ClientStreamMessagesSearchRequest.md#fromjson-1)
- [fromJsonString](ClientStreamMessagesSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamMessagesSearchRequest**(`data?`): [`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)\> |

#### Returns

[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

#### Overrides

Message\&lt;ClientStreamMessagesSearchRequest\&gt;.constructor

#### Defined in

[src/client_streams.scailo_pb.ts:1984](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1984)

## Properties

### clientStreamId

• **clientStreamId**: `bigint` = `protoInt64.zero`

The ID of the client stream

**`Generated`**

from field: uint64 client_stream_id = 20;

#### Defined in

[src/client_streams.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1968)

___

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

[src/client_streams.scailo_pb.ts:1900](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1900)

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

[src/client_streams.scailo_pb.ts:1954](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1954)

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

[src/client_streams.scailo_pb.ts:1884](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1884)

___

### messageType

• **messageType**: [`CLIENT_STREAM_MESSAGE_TYPE`](../enums/CLIENT_STREAM_MESSAGE_TYPE.md) = `CLIENT_STREAM_MESSAGE_TYPE.CLIENT_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED`

The type of the message

**`Generated`**

from field: Scailo.CLIENT_STREAM_MESSAGE_TYPE message_type = 8;

#### Defined in

[src/client_streams.scailo_pb.ts:1961](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1961)

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

[src/client_streams.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1916)

___

### responseToMessageUuid

• **responseToMessageUuid**: `string` = `""`

Stores the optional UUID of the message that this message is a response to

**`Generated`**

from field: string response_to_message_uuid = 30;

#### Defined in

[src/client_streams.scailo_pb.ts:1975](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1975)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/client_streams.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1982)

___

### sortKey

• **sortKey**: [`CLIENT_STREAM_MESSAGE_SORT_KEY`](../enums/CLIENT_STREAM_MESSAGE_SORT_KEY.md) = `CLIENT_STREAM_MESSAGE_SORT_KEY.CLIENT_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.CLIENT_STREAM_MESSAGE_SORT_KEY sort_key = 5;

#### Defined in

[src/client_streams.scailo_pb.ts:1938](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1938)

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

[src/client_streams.scailo_pb.ts:1928](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1928)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/client_streams.scailo_pb.ts:1991](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1991)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/client_streams.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1989)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamMessagesSearchRequest"``

#### Defined in

[src/client_streams.scailo_pb.ts:1990](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L1990)

## Methods

### clone

▸ **clone**(): [`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

Create a deep copy.

#### Returns

[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)\>

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
| `a` | `undefined` \| [`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)\> |
| `b` | `undefined` \| [`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/client_streams.scailo_pb.ts:2016](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L2016)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:2004](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L2004)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:2008](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L2008)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessagesSearchRequest`](ClientStreamMessagesSearchRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:2012](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/client_streams.scailo_pb.ts#L2012)
