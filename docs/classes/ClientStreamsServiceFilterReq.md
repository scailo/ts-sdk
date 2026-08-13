[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceFilterReq

# Class: ClientStreamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ClientStreamsServiceFilterReq

## Hierarchy

- `Message`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\>

  ↳ **`ClientStreamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceFilterReq.md#constructor)

### Properties

- [clientId](ClientStreamsServiceFilterReq.md#clientid)
- [clientSubscriberUserId](ClientStreamsServiceFilterReq.md#clientsubscriberuserid)
- [completedOnEnd](ClientStreamsServiceFilterReq.md#completedonend)
- [completedOnStart](ClientStreamsServiceFilterReq.md#completedonstart)
- [count](ClientStreamsServiceFilterReq.md#count)
- [creationTimestampEnd](ClientStreamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ClientStreamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ClientStreamsServiceFilterReq.md#entityuuid)
- [internalRef](ClientStreamsServiceFilterReq.md#internalref)
- [internalSubscriberUserId](ClientStreamsServiceFilterReq.md#internalsubscriberuserid)
- [isActive](ClientStreamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ClientStreamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ClientStreamsServiceFilterReq.md#modificationtimestampstart)
- [offset](ClientStreamsServiceFilterReq.md#offset)
- [refFrom](ClientStreamsServiceFilterReq.md#reffrom)
- [refId](ClientStreamsServiceFilterReq.md#refid)
- [sortKey](ClientStreamsServiceFilterReq.md#sortkey)
- [sortOrder](ClientStreamsServiceFilterReq.md#sortorder)
- [status](ClientStreamsServiceFilterReq.md#status)
- [title](ClientStreamsServiceFilterReq.md#title)
- [fields](ClientStreamsServiceFilterReq.md#fields)
- [runtime](ClientStreamsServiceFilterReq.md#runtime)
- [typeName](ClientStreamsServiceFilterReq.md#typename)

### Methods

- [clone](ClientStreamsServiceFilterReq.md#clone)
- [equals](ClientStreamsServiceFilterReq.md#equals)
- [fromBinary](ClientStreamsServiceFilterReq.md#frombinary)
- [fromJson](ClientStreamsServiceFilterReq.md#fromjson)
- [fromJsonString](ClientStreamsServiceFilterReq.md#fromjsonstring)
- [getType](ClientStreamsServiceFilterReq.md#gettype)
- [toBinary](ClientStreamsServiceFilterReq.md#tobinary)
- [toJSON](ClientStreamsServiceFilterReq.md#tojson)
- [toJson](ClientStreamsServiceFilterReq.md#tojson-1)
- [toJsonString](ClientStreamsServiceFilterReq.md#tojsonstring)
- [equals](ClientStreamsServiceFilterReq.md#equals-1)
- [fromBinary](ClientStreamsServiceFilterReq.md#frombinary-1)
- [fromJson](ClientStreamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceFilterReq**(`data?`): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\> |

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Overrides

Message\&lt;ClientStreamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/client_streams.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1222)

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated client ID

**`Generated`**

from field: uint64 client_id = 40;

#### Defined in

[src/client_streams.scailo_pb.ts:1190](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1190)

___

### clientSubscriberUserId

• **clientSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated client subscriber user ID

**`Generated`**

from field: uint64 client_subscriber_user_id = 61;

#### Defined in

[src/client_streams.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1220)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/client_streams.scailo_pb.ts:1168](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1168)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/client_streams.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1161)

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

[src/client_streams.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1029)

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

[src/client_streams.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1099)

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

[src/client_streams.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1083)

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

[src/client_streams.scailo_pb.ts:1147](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1147)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

[src/client_streams.scailo_pb.ts:1175](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1175)

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

[src/client_streams.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1213)

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

[src/client_streams.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1013)

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

[src/client_streams.scailo_pb.ts:1131](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1131)

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

[src/client_streams.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1115)

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

[src/client_streams.scailo_pb.ts:1045](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1045)

___

### refFrom

• **refFrom**: [`CLIENT_STREAM_REF_FROM`](../enums/CLIENT_STREAM_REF_FROM.md) = `CLIENT_STREAM_REF_FROM.CLIENT_STREAM_REF_FROM_ANY_UNSPECIFIED`

Filter by the associated reference

**`Generated`**

from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 41;

#### Defined in

[src/client_streams.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1197)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Filter by the associated reference ID

------------------------------------------------

**`Generated`**

from field: uint64 ref_id = 42;

#### Defined in

[src/client_streams.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1206)

___

### sortKey

• **sortKey**: [`CLIENT_STREAM_SORT_KEY`](../enums/CLIENT_STREAM_SORT_KEY.md) = `CLIENT_STREAM_SORT_KEY.CLIENT_STREAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.CLIENT_STREAM_SORT_KEY sort_key = 5;

#### Defined in

[src/client_streams.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1067)

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

[src/client_streams.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1057)

___

### status

• **status**: [`CLIENT_STREAM_LIFECYCLE`](../enums/CLIENT_STREAM_LIFECYCLE.md) = `CLIENT_STREAM_LIFECYCLE.CLIENT_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this client stream

**`Generated`**

from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 10;

#### Defined in

[src/client_streams.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1154)

___

### title

• **title**: `string` = `""`

The title of the client stream

**`Generated`**

from field: string title = 30;

#### Defined in

[src/client_streams.scailo_pb.ts:1182](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1182)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/client_streams.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1229)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/client_streams.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1227)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceFilterReq"``

#### Defined in

[src/client_streams.scailo_pb.ts:1228](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1228)

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md) \| `PlainMessage`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md) \| `PlainMessage`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md) \| `PlainMessage`\<[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/client_streams.scailo_pb.ts:1264](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1264)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1252)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1256](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1256)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceFilterReq`](ClientStreamsServiceFilterReq.md)

#### Defined in

[src/client_streams.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/client_streams.scailo_pb.ts#L1260)
