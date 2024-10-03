[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceSearchAllReq

# Class: ClientStreamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ClientStreamsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)\>

  ↳ **`ClientStreamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceSearchAllReq.md#constructor)

### Properties

- [clientId](ClientStreamsServiceSearchAllReq.md#clientid)
- [clientSubscriberUserId](ClientStreamsServiceSearchAllReq.md#clientsubscriberuserid)
- [count](ClientStreamsServiceSearchAllReq.md#count)
- [entityUuid](ClientStreamsServiceSearchAllReq.md#entityuuid)
- [internalSubscriberUserId](ClientStreamsServiceSearchAllReq.md#internalsubscriberuserid)
- [isActive](ClientStreamsServiceSearchAllReq.md#isactive)
- [offset](ClientStreamsServiceSearchAllReq.md#offset)
- [searchKey](ClientStreamsServiceSearchAllReq.md#searchkey)
- [sortKey](ClientStreamsServiceSearchAllReq.md#sortkey)
- [sortOrder](ClientStreamsServiceSearchAllReq.md#sortorder)
- [status](ClientStreamsServiceSearchAllReq.md#status)
- [fields](ClientStreamsServiceSearchAllReq.md#fields)
- [runtime](ClientStreamsServiceSearchAllReq.md#runtime)
- [typeName](ClientStreamsServiceSearchAllReq.md#typename)

### Methods

- [clone](ClientStreamsServiceSearchAllReq.md#clone)
- [equals](ClientStreamsServiceSearchAllReq.md#equals)
- [fromBinary](ClientStreamsServiceSearchAllReq.md#frombinary)
- [fromJson](ClientStreamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ClientStreamsServiceSearchAllReq.md#fromjsonstring)
- [getType](ClientStreamsServiceSearchAllReq.md#gettype)
- [toBinary](ClientStreamsServiceSearchAllReq.md#tobinary)
- [toJSON](ClientStreamsServiceSearchAllReq.md#tojson)
- [toJson](ClientStreamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ClientStreamsServiceSearchAllReq.md#tojsonstring)
- [equals](ClientStreamsServiceSearchAllReq.md#equals-1)
- [fromBinary](ClientStreamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ClientStreamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceSearchAllReq**(`data?`): [`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)\> |

#### Returns

[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ClientStreamsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:1352

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated client ID

------------------------------------------------

**`Generated`**

from field: uint64 client_id = 40;

#### Defined in

src/client_streams.scailo_pb.ts:1336

___

### clientSubscriberUserId

• **clientSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated client subscriber user ID

**`Generated`**

from field: uint64 client_subscriber_user_id = 61;

#### Defined in

src/client_streams.scailo_pb.ts:1350

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/client_streams.scailo_pb.ts:1284

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/client_streams.scailo_pb.ts:1312

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

src/client_streams.scailo_pb.ts:1343

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/client_streams.scailo_pb.ts:1277

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/client_streams.scailo_pb.ts:1291

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/client_streams.scailo_pb.ts:1326

___

### sortKey

• **sortKey**: [`CLIENT_STREAM_SORT_KEY`](../enums/CLIENT_STREAM_SORT_KEY.md) = `CLIENT_STREAM_SORT_KEY.CLIENT_STREAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.CLIENT_STREAM_SORT_KEY sort_key = 5;

#### Defined in

src/client_streams.scailo_pb.ts:1305

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/client_streams.scailo_pb.ts:1298

___

### status

• **status**: [`CLIENT_STREAM_LIFECYCLE`](../enums/CLIENT_STREAM_LIFECYCLE.md) = `CLIENT_STREAM_LIFECYCLE.CLIENT_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 10;

#### Defined in

src/client_streams.scailo_pb.ts:1319

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:1359

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:1357

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceSearchAllReq"``

#### Defined in

src/client_streams.scailo_pb.ts:1358

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:1385

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:1373

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:1377

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceSearchAllReq`](ClientStreamsServiceSearchAllReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:1381
