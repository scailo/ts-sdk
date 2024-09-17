[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceMessageCreateRequest

# Class: VendorStreamsServiceMessageCreateRequest

Describes the parameters required to add a message to an vendor stream

**`Generated`**

from message Scailo.VendorStreamsServiceMessageCreateRequest

## Hierarchy

- `Message`\<[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)\>

  ↳ **`VendorStreamsServiceMessageCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceMessageCreateRequest.md#constructor)

### Properties

- [content](VendorStreamsServiceMessageCreateRequest.md#content)
- [messageType](VendorStreamsServiceMessageCreateRequest.md#messagetype)
- [responseToMessageUuid](VendorStreamsServiceMessageCreateRequest.md#responsetomessageuuid)
- [vendorStreamUuid](VendorStreamsServiceMessageCreateRequest.md#vendorstreamuuid)
- [fields](VendorStreamsServiceMessageCreateRequest.md#fields)
- [runtime](VendorStreamsServiceMessageCreateRequest.md#runtime)
- [typeName](VendorStreamsServiceMessageCreateRequest.md#typename)

### Methods

- [clone](VendorStreamsServiceMessageCreateRequest.md#clone)
- [equals](VendorStreamsServiceMessageCreateRequest.md#equals)
- [fromBinary](VendorStreamsServiceMessageCreateRequest.md#frombinary)
- [fromJson](VendorStreamsServiceMessageCreateRequest.md#fromjson)
- [fromJsonString](VendorStreamsServiceMessageCreateRequest.md#fromjsonstring)
- [getType](VendorStreamsServiceMessageCreateRequest.md#gettype)
- [toBinary](VendorStreamsServiceMessageCreateRequest.md#tobinary)
- [toJSON](VendorStreamsServiceMessageCreateRequest.md#tojson)
- [toJson](VendorStreamsServiceMessageCreateRequest.md#tojson-1)
- [toJsonString](VendorStreamsServiceMessageCreateRequest.md#tojsonstring)
- [equals](VendorStreamsServiceMessageCreateRequest.md#equals-1)
- [fromBinary](VendorStreamsServiceMessageCreateRequest.md#frombinary-1)
- [fromJson](VendorStreamsServiceMessageCreateRequest.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceMessageCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceMessageCreateRequest**(`data?`): [`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)\> |

#### Returns

[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

#### Overrides

Message\&lt;VendorStreamsServiceMessageCreateRequest\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:1409

## Properties

### content

• **content**: `string` = `""`

The content of the message

**`Generated`**

from field: string content = 20;

#### Defined in

src/vendorstreams.scailo_pb.ts:1407

___

### messageType

• **messageType**: [`VENDOR_STREAM_MESSAGE_TYPE`](../enums/VENDOR_STREAM_MESSAGE_TYPE.md) = `VENDOR_STREAM_MESSAGE_TYPE.VENDOR_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED`

The type of the message

**`Generated`**

from field: Scailo.VENDOR_STREAM_MESSAGE_TYPE message_type = 8;

#### Defined in

src/vendorstreams.scailo_pb.ts:1386

___

### responseToMessageUuid

• **responseToMessageUuid**: `string` = `""`

Stores the optional UUID of the message that this message is a response to

**`Generated`**

from field: string response_to_message_uuid = 11;

#### Defined in

src/vendorstreams.scailo_pb.ts:1400

___

### vendorStreamUuid

• **vendorStreamUuid**: `string` = `""`

Stores the vendor stream UUID

**`Generated`**

from field: string vendor_stream_uuid = 10;

#### Defined in

src/vendorstreams.scailo_pb.ts:1393

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:1416

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:1414

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceMessageCreateRequest"``

#### Defined in

src/vendorstreams.scailo_pb.ts:1415

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:1435

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1423

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1427

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceMessageCreateRequest`](VendorStreamsServiceMessageCreateRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1431
