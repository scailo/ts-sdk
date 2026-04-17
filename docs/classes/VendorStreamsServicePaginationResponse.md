[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServicePaginationResponse

# Class: VendorStreamsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.VendorStreamsServicePaginationResponse

## Hierarchy

- `Message`\<[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)\>

  ↳ **`VendorStreamsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServicePaginationResponse.md#constructor)

### Properties

- [count](VendorStreamsServicePaginationResponse.md#count)
- [offset](VendorStreamsServicePaginationResponse.md#offset)
- [payload](VendorStreamsServicePaginationResponse.md#payload)
- [total](VendorStreamsServicePaginationResponse.md#total)
- [fields](VendorStreamsServicePaginationResponse.md#fields)
- [runtime](VendorStreamsServicePaginationResponse.md#runtime)
- [typeName](VendorStreamsServicePaginationResponse.md#typename)

### Methods

- [clone](VendorStreamsServicePaginationResponse.md#clone)
- [equals](VendorStreamsServicePaginationResponse.md#equals)
- [fromBinary](VendorStreamsServicePaginationResponse.md#frombinary)
- [fromJson](VendorStreamsServicePaginationResponse.md#fromjson)
- [fromJsonString](VendorStreamsServicePaginationResponse.md#fromjsonstring)
- [getType](VendorStreamsServicePaginationResponse.md#gettype)
- [toBinary](VendorStreamsServicePaginationResponse.md#tobinary)
- [toJSON](VendorStreamsServicePaginationResponse.md#tojson)
- [toJson](VendorStreamsServicePaginationResponse.md#tojson-1)
- [toJsonString](VendorStreamsServicePaginationResponse.md#tojsonstring)
- [equals](VendorStreamsServicePaginationResponse.md#equals-1)
- [fromBinary](VendorStreamsServicePaginationResponse.md#frombinary-1)
- [fromJson](VendorStreamsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](VendorStreamsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServicePaginationResponse**(`data?`): [`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)\> |

#### Returns

[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

#### Overrides

Message\&lt;VendorStreamsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L922)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/vendor_streams.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L892)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/vendor_streams.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L902)

___

### payload

• **payload**: [`VendorStream`](VendorStream.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.VendorStream payload = 4;

#### Defined in

[src/vendor_streams.scailo_pb.ts:920](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L920)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/vendor_streams.scailo_pb.ts:912](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L912)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L929)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L927)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServicePaginationResponse"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:928](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L928)

## Methods

### clone

▸ **clone**(): [`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md) \| `PlainMessage`\<[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md) \| `PlainMessage`\<[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md) \| `PlainMessage`\<[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:948](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L948)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L936)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L940)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginationResponse`](VendorStreamsServicePaginationResponse.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:944](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_streams.scailo_pb.ts#L944)
