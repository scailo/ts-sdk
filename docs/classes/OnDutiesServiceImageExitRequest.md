[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServiceImageExitRequest

# Class: OnDutiesServiceImageExitRequest

Describes the message payload that is necessary to create an exit record. This will most likely be called only from mobile devices.

**`Generated`**

from message Scailo.OnDutiesServiceImageExitRequest

## Hierarchy

- `Message`\<[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)\>

  ↳ **`OnDutiesServiceImageExitRequest`**

## Table of contents

### Constructors

- [constructor](OnDutiesServiceImageExitRequest.md#constructor)

### Properties

- [exitImage](OnDutiesServiceImageExitRequest.md#exitimage)
- [exitImageMimeType](OnDutiesServiceImageExitRequest.md#exitimagemimetype)
- [exitLatitude](OnDutiesServiceImageExitRequest.md#exitlatitude)
- [exitLongitude](OnDutiesServiceImageExitRequest.md#exitlongitude)
- [id](OnDutiesServiceImageExitRequest.md#id)
- [fields](OnDutiesServiceImageExitRequest.md#fields)
- [runtime](OnDutiesServiceImageExitRequest.md#runtime)
- [typeName](OnDutiesServiceImageExitRequest.md#typename)

### Methods

- [clone](OnDutiesServiceImageExitRequest.md#clone)
- [equals](OnDutiesServiceImageExitRequest.md#equals)
- [fromBinary](OnDutiesServiceImageExitRequest.md#frombinary)
- [fromJson](OnDutiesServiceImageExitRequest.md#fromjson)
- [fromJsonString](OnDutiesServiceImageExitRequest.md#fromjsonstring)
- [getType](OnDutiesServiceImageExitRequest.md#gettype)
- [toBinary](OnDutiesServiceImageExitRequest.md#tobinary)
- [toJSON](OnDutiesServiceImageExitRequest.md#tojson)
- [toJson](OnDutiesServiceImageExitRequest.md#tojson-1)
- [toJsonString](OnDutiesServiceImageExitRequest.md#tojsonstring)
- [equals](OnDutiesServiceImageExitRequest.md#equals-1)
- [fromBinary](OnDutiesServiceImageExitRequest.md#frombinary-1)
- [fromJson](OnDutiesServiceImageExitRequest.md#fromjson-1)
- [fromJsonString](OnDutiesServiceImageExitRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServiceImageExitRequest**(`data?`): [`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)\> |

#### Returns

[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

#### Overrides

Message\&lt;OnDutiesServiceImageExitRequest\&gt;.constructor

#### Defined in

src/on_duties.scailo_pb.ts:458

## Properties

### exitImage

• **exitImage**: `Uint8Array`

The raw image content of the exit image

**`Generated`**

from field: bytes exit_image = 13;

#### Defined in

src/on_duties.scailo_pb.ts:435

___

### exitImageMimeType

• **exitImageMimeType**: `string` = `""`

The MIME type of the exit image

**`Generated`**

from field: string exit_image_mime_type = 14;

#### Defined in

src/on_duties.scailo_pb.ts:442

___

### exitLatitude

• **exitLatitude**: `number` = `0`

The latitude of where the onduty exit was recorded

**`Generated`**

from field: double exit_latitude = 15;

#### Defined in

src/on_duties.scailo_pb.ts:449

___

### exitLongitude

• **exitLongitude**: `number` = `0`

The longiture of where the onduty exit was recorded

**`Generated`**

from field: double exit_longitude = 16;

#### Defined in

src/on_duties.scailo_pb.ts:456

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/on_duties.scailo_pb.ts:428

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/on_duties.scailo_pb.ts:465

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/on_duties.scailo_pb.ts:463

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDutiesServiceImageExitRequest"``

#### Defined in

src/on_duties.scailo_pb.ts:464

## Methods

### clone

▸ **clone**(): [`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

Create a deep copy.

#### Returns

[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md) \| `PlainMessage`\<[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)\>

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
| `a` | `undefined` \| [`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md) \| `PlainMessage`\<[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)\> |
| `b` | `undefined` \| [`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md) \| `PlainMessage`\<[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/on_duties.scailo_pb.ts:485

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:473

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:477

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceImageExitRequest`](OnDutiesServiceImageExitRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:481
