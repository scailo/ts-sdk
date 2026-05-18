[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceSearchAllReq

# Class: VendorStreamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.VendorStreamsServiceSearchAllReq

## Hierarchy

- `Message`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\>

  ↳ **`VendorStreamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceSearchAllReq.md#constructor)

### Properties

- [count](VendorStreamsServiceSearchAllReq.md#count)
- [entityUuid](VendorStreamsServiceSearchAllReq.md#entityuuid)
- [internalSubscriberUserId](VendorStreamsServiceSearchAllReq.md#internalsubscriberuserid)
- [isActive](VendorStreamsServiceSearchAllReq.md#isactive)
- [offset](VendorStreamsServiceSearchAllReq.md#offset)
- [searchKey](VendorStreamsServiceSearchAllReq.md#searchkey)
- [sortKey](VendorStreamsServiceSearchAllReq.md#sortkey)
- [sortOrder](VendorStreamsServiceSearchAllReq.md#sortorder)
- [status](VendorStreamsServiceSearchAllReq.md#status)
- [vendorId](VendorStreamsServiceSearchAllReq.md#vendorid)
- [vendorSubscriberUserId](VendorStreamsServiceSearchAllReq.md#vendorsubscriberuserid)
- [fields](VendorStreamsServiceSearchAllReq.md#fields)
- [runtime](VendorStreamsServiceSearchAllReq.md#runtime)
- [typeName](VendorStreamsServiceSearchAllReq.md#typename)

### Methods

- [clone](VendorStreamsServiceSearchAllReq.md#clone)
- [equals](VendorStreamsServiceSearchAllReq.md#equals)
- [fromBinary](VendorStreamsServiceSearchAllReq.md#frombinary)
- [fromJson](VendorStreamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](VendorStreamsServiceSearchAllReq.md#fromjsonstring)
- [getType](VendorStreamsServiceSearchAllReq.md#gettype)
- [toBinary](VendorStreamsServiceSearchAllReq.md#tobinary)
- [toJSON](VendorStreamsServiceSearchAllReq.md#tojson)
- [toJson](VendorStreamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](VendorStreamsServiceSearchAllReq.md#tojsonstring)
- [equals](VendorStreamsServiceSearchAllReq.md#equals-1)
- [fromBinary](VendorStreamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](VendorStreamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceSearchAllReq**(`data?`): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\> |

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Overrides

Message\&lt;VendorStreamsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:1577](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1577)

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

[src/vendor_streams.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1474)

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

[src/vendor_streams.scailo_pb.ts:1528](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1528)

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1568](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1568)

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

[src/vendor_streams.scailo_pb.ts:1458](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1458)

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

[src/vendor_streams.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1490)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1551)

___

### sortKey

• **sortKey**: [`VENDOR_STREAM_SORT_KEY`](../enums/VENDOR_STREAM_SORT_KEY.md) = `VENDOR_STREAM_SORT_KEY.VENDOR_STREAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.VENDOR_STREAM_SORT_KEY sort_key = 5;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1512](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1512)

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

[src/vendor_streams.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1502)

___

### status

• **status**: [`VENDOR_STREAM_LIFECYCLE`](../enums/VENDOR_STREAM_LIFECYCLE.md) = `VENDOR_STREAM_LIFECYCLE.VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 10;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1535](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1535)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated vendor ID

------------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 40;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1561](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1561)

___

### vendorSubscriberUserId

• **vendorSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated vendor subscriber user ID

**`Generated`**

from field: uint64 vendor_subscriber_user_id = 61;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1575](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1575)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1584](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1584)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1582)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceSearchAllReq"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:1583](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1583)

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1610](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1610)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1598](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1598)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1602](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1602)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1606](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendor_streams.scailo_pb.ts#L1606)
