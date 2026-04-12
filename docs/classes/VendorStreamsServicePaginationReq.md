[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServicePaginationReq

# Class: VendorStreamsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.VendorStreamsServicePaginationReq

## Hierarchy

- `Message`\<[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)\>

  ↳ **`VendorStreamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServicePaginationReq.md#constructor)

### Properties

- [count](VendorStreamsServicePaginationReq.md#count)
- [isActive](VendorStreamsServicePaginationReq.md#isactive)
- [offset](VendorStreamsServicePaginationReq.md#offset)
- [sortKey](VendorStreamsServicePaginationReq.md#sortkey)
- [sortOrder](VendorStreamsServicePaginationReq.md#sortorder)
- [status](VendorStreamsServicePaginationReq.md#status)
- [fields](VendorStreamsServicePaginationReq.md#fields)
- [runtime](VendorStreamsServicePaginationReq.md#runtime)
- [typeName](VendorStreamsServicePaginationReq.md#typename)

### Methods

- [clone](VendorStreamsServicePaginationReq.md#clone)
- [equals](VendorStreamsServicePaginationReq.md#equals)
- [fromBinary](VendorStreamsServicePaginationReq.md#frombinary)
- [fromJson](VendorStreamsServicePaginationReq.md#fromjson)
- [fromJsonString](VendorStreamsServicePaginationReq.md#fromjsonstring)
- [getType](VendorStreamsServicePaginationReq.md#gettype)
- [toBinary](VendorStreamsServicePaginationReq.md#tobinary)
- [toJSON](VendorStreamsServicePaginationReq.md#tojson)
- [toJson](VendorStreamsServicePaginationReq.md#tojson-1)
- [toJsonString](VendorStreamsServicePaginationReq.md#tojsonstring)
- [equals](VendorStreamsServicePaginationReq.md#equals-1)
- [fromBinary](VendorStreamsServicePaginationReq.md#frombinary-1)
- [fromJson](VendorStreamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](VendorStreamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServicePaginationReq**(`data?`): [`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)\> |

#### Returns

[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

#### Overrides

Message\&lt;VendorStreamsServicePaginationReq\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:844](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L844)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/vendor_streams.scailo_pb.ts:797](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L797)

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

[src/vendor_streams.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L781)

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

[src/vendor_streams.scailo_pb.ts:813](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L813)

___

### sortKey

• **sortKey**: [`VENDOR_STREAM_SORT_KEY`](../enums/VENDOR_STREAM_SORT_KEY.md) = `VENDOR_STREAM_SORT_KEY.VENDOR_STREAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.VENDOR_STREAM_SORT_KEY sort_key = 5;

#### Defined in

[src/vendor_streams.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L835)

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

[src/vendor_streams.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L825)

___

### status

• **status**: [`VENDOR_STREAM_LIFECYCLE`](../enums/VENDOR_STREAM_LIFECYCLE.md) = `VENDOR_STREAM_LIFECYCLE.VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this vendor stream

**`Generated`**

from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 6;

#### Defined in

[src/vendor_streams.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L842)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:851](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L851)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L849)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServicePaginationReq"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L850)

## Methods

### clone

▸ **clone**(): [`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md) \| `PlainMessage`\<[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md) \| `PlainMessage`\<[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md) \| `PlainMessage`\<[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L872)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L860)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L864)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginationReq`](VendorStreamsServicePaginationReq.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_streams.scailo_pb.ts#L868)
