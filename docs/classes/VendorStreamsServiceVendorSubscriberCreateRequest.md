[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceVendorSubscriberCreateRequest

# Class: VendorStreamsServiceVendorSubscriberCreateRequest

Describes the parameters necessary to create a vendor stream vendor subscriber

**`Generated`**

from message Scailo.VendorStreamsServiceVendorSubscriberCreateRequest

## Hierarchy

- `Message`\<[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)\>

  ↳ **`VendorStreamsServiceVendorSubscriberCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceVendorSubscriberCreateRequest.md#constructor)

### Properties

- [userComment](VendorStreamsServiceVendorSubscriberCreateRequest.md#usercomment)
- [userId](VendorStreamsServiceVendorSubscriberCreateRequest.md#userid)
- [vendorStreamId](VendorStreamsServiceVendorSubscriberCreateRequest.md#vendorstreamid)
- [fields](VendorStreamsServiceVendorSubscriberCreateRequest.md#fields)
- [runtime](VendorStreamsServiceVendorSubscriberCreateRequest.md#runtime)
- [typeName](VendorStreamsServiceVendorSubscriberCreateRequest.md#typename)

### Methods

- [clone](VendorStreamsServiceVendorSubscriberCreateRequest.md#clone)
- [equals](VendorStreamsServiceVendorSubscriberCreateRequest.md#equals)
- [fromBinary](VendorStreamsServiceVendorSubscriberCreateRequest.md#frombinary)
- [fromJson](VendorStreamsServiceVendorSubscriberCreateRequest.md#fromjson)
- [fromJsonString](VendorStreamsServiceVendorSubscriberCreateRequest.md#fromjsonstring)
- [getType](VendorStreamsServiceVendorSubscriberCreateRequest.md#gettype)
- [toBinary](VendorStreamsServiceVendorSubscriberCreateRequest.md#tobinary)
- [toJSON](VendorStreamsServiceVendorSubscriberCreateRequest.md#tojson)
- [toJson](VendorStreamsServiceVendorSubscriberCreateRequest.md#tojson-1)
- [toJsonString](VendorStreamsServiceVendorSubscriberCreateRequest.md#tojsonstring)
- [equals](VendorStreamsServiceVendorSubscriberCreateRequest.md#equals-1)
- [fromBinary](VendorStreamsServiceVendorSubscriberCreateRequest.md#frombinary-1)
- [fromJson](VendorStreamsServiceVendorSubscriberCreateRequest.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceVendorSubscriberCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceVendorSubscriberCreateRequest**(`data?`): [`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)\> |

#### Returns

[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

#### Overrides

Message\&lt;VendorStreamsServiceVendorSubscriberCreateRequest\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:2160

## Properties

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:2144

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/vendorstreams.scailo_pb.ts:2158

___

### vendorStreamId

• **vendorStreamId**: `bigint` = `protoInt64.zero`

Stores the vendor stream ID

**`Generated`**

from field: uint64 vendor_stream_id = 10;

#### Defined in

src/vendorstreams.scailo_pb.ts:2151

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:2167

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:2165

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceVendorSubscriberCreateRequest"``

#### Defined in

src/vendorstreams.scailo_pb.ts:2166

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:2185

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2173

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2177

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceVendorSubscriberCreateRequest`](VendorStreamsServiceVendorSubscriberCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2181
