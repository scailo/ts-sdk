[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceFilterReq

# Class: VendorStreamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.VendorStreamsServiceFilterReq

## Hierarchy

- `Message`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\>

  ↳ **`VendorStreamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceFilterReq.md#constructor)

### Properties

- [completedOnEnd](VendorStreamsServiceFilterReq.md#completedonend)
- [completedOnStart](VendorStreamsServiceFilterReq.md#completedonstart)
- [count](VendorStreamsServiceFilterReq.md#count)
- [creationTimestampEnd](VendorStreamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VendorStreamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](VendorStreamsServiceFilterReq.md#entityuuid)
- [internalRef](VendorStreamsServiceFilterReq.md#internalref)
- [internalSubscriberUserId](VendorStreamsServiceFilterReq.md#internalsubscriberuserid)
- [isActive](VendorStreamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](VendorStreamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorStreamsServiceFilterReq.md#modificationtimestampstart)
- [offset](VendorStreamsServiceFilterReq.md#offset)
- [refFrom](VendorStreamsServiceFilterReq.md#reffrom)
- [refId](VendorStreamsServiceFilterReq.md#refid)
- [sortKey](VendorStreamsServiceFilterReq.md#sortkey)
- [sortOrder](VendorStreamsServiceFilterReq.md#sortorder)
- [status](VendorStreamsServiceFilterReq.md#status)
- [title](VendorStreamsServiceFilterReq.md#title)
- [vendorId](VendorStreamsServiceFilterReq.md#vendorid)
- [vendorSubscriberUserId](VendorStreamsServiceFilterReq.md#vendorsubscriberuserid)
- [fields](VendorStreamsServiceFilterReq.md#fields)
- [runtime](VendorStreamsServiceFilterReq.md#runtime)
- [typeName](VendorStreamsServiceFilterReq.md#typename)

### Methods

- [clone](VendorStreamsServiceFilterReq.md#clone)
- [equals](VendorStreamsServiceFilterReq.md#equals)
- [fromBinary](VendorStreamsServiceFilterReq.md#frombinary)
- [fromJson](VendorStreamsServiceFilterReq.md#fromjson)
- [fromJsonString](VendorStreamsServiceFilterReq.md#fromjsonstring)
- [getType](VendorStreamsServiceFilterReq.md#gettype)
- [toBinary](VendorStreamsServiceFilterReq.md#tobinary)
- [toJSON](VendorStreamsServiceFilterReq.md#tojson)
- [toJson](VendorStreamsServiceFilterReq.md#tojson-1)
- [toJsonString](VendorStreamsServiceFilterReq.md#tojsonstring)
- [equals](VendorStreamsServiceFilterReq.md#equals-1)
- [fromBinary](VendorStreamsServiceFilterReq.md#frombinary-1)
- [fromJson](VendorStreamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceFilterReq**(`data?`): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\> |

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Overrides

Message\&lt;VendorStreamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1206)

## Properties

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1152](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1152)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1145](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1145)

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

[src/vendor_streams.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1013)

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

[src/vendor_streams.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1083)

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

[src/vendor_streams.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1067)

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

[src/vendor_streams.scailo_pb.ts:1131](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1131)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 18;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1159](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1159)

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1197)

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

[src/vendor_streams.scailo_pb.ts:997](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L997)

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

[src/vendor_streams.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1115)

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

[src/vendor_streams.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1099)

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

[src/vendor_streams.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1029)

___

### refFrom

• **refFrom**: [`VENDOR_STREAM_REF_FROM`](../enums/VENDOR_STREAM_REF_FROM.md) = `VENDOR_STREAM_REF_FROM.VENDOR_STREAM_REF_FROM_ANY_UNSPECIFIED`

Filter by the associated reference

**`Generated`**

from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 41;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1181](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1181)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Filter by the associated reference ID

------------------------------------------------

**`Generated`**

from field: uint64 ref_id = 42;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1190](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1190)

___

### sortKey

• **sortKey**: [`VENDOR_STREAM_SORT_KEY`](../enums/VENDOR_STREAM_SORT_KEY.md) = `VENDOR_STREAM_SORT_KEY.VENDOR_STREAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.VENDOR_STREAM_SORT_KEY sort_key = 5;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1051](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1051)

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

[src/vendor_streams.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1041)

___

### status

• **status**: [`VENDOR_STREAM_LIFECYCLE`](../enums/VENDOR_STREAM_LIFECYCLE.md) = `VENDOR_STREAM_LIFECYCLE.VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this vendor stream

**`Generated`**

from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 10;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1138](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1138)

___

### title

• **title**: `string` = `""`

The title of the vendor stream

**`Generated`**

from field: string title = 30;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1166](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1166)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 40;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1174)

___

### vendorSubscriberUserId

• **vendorSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated vendor subscriber user ID

**`Generated`**

from field: uint64 vendor_subscriber_user_id = 61;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1204)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1213)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1211)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceFilterReq"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1212)

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md) \| `PlainMessage`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md) \| `PlainMessage`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md) \| `PlainMessage`\<[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1248](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1248)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1236)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1240](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1240)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceFilterReq`](VendorStreamsServiceFilterReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L1244)
