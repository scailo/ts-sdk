[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RepeatWithDeliveryDate

# Class: RepeatWithDeliveryDate

Describes the payload necessary for performing Repeat requests with a specific delivery date

**`Generated`**

from message Scailo.RepeatWithDeliveryDate

## Hierarchy

- `Message`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\>

  ↳ **`RepeatWithDeliveryDate`**

## Table of contents

### Constructors

- [constructor](RepeatWithDeliveryDate.md#constructor)

### Properties

- [deliveryDate](RepeatWithDeliveryDate.md#deliverydate)
- [referenceId](RepeatWithDeliveryDate.md#referenceid)
- [userComment](RepeatWithDeliveryDate.md#usercomment)
- [uuid](RepeatWithDeliveryDate.md#uuid)
- [fields](RepeatWithDeliveryDate.md#fields)
- [runtime](RepeatWithDeliveryDate.md#runtime)
- [typeName](RepeatWithDeliveryDate.md#typename)

### Methods

- [clone](RepeatWithDeliveryDate.md#clone)
- [equals](RepeatWithDeliveryDate.md#equals)
- [fromBinary](RepeatWithDeliveryDate.md#frombinary)
- [fromJson](RepeatWithDeliveryDate.md#fromjson)
- [fromJsonString](RepeatWithDeliveryDate.md#fromjsonstring)
- [getType](RepeatWithDeliveryDate.md#gettype)
- [toBinary](RepeatWithDeliveryDate.md#tobinary)
- [toJSON](RepeatWithDeliveryDate.md#tojson)
- [toJson](RepeatWithDeliveryDate.md#tojson-1)
- [toJsonString](RepeatWithDeliveryDate.md#tojsonstring)
- [equals](RepeatWithDeliveryDate.md#equals-1)
- [fromBinary](RepeatWithDeliveryDate.md#frombinary-1)
- [fromJson](RepeatWithDeliveryDate.md#fromjson-1)
- [fromJsonString](RepeatWithDeliveryDate.md#fromjsonstring-1)

## Constructors

### constructor

• **new RepeatWithDeliveryDate**(`data?`): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\> |

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Overrides

Message\&lt;RepeatWithDeliveryDate\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:2269

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The common delivery date

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

src/base.scailo_pb.ts:2267

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the repeated record

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/base.scailo_pb.ts:2260

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/base.scailo_pb.ts:2253

___

### uuid

• **uuid**: `string` = `""`

UUID of the resource

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/base.scailo_pb.ts:2246

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:2276

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:2274

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RepeatWithDeliveryDate"``

#### Defined in

src/base.scailo_pb.ts:2275

## Methods

### clone

▸ **clone**(): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

Create a deep copy.

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

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
| `other` | `undefined` \| ``null`` \| [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md) \| `PlainMessage`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\> |

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

▸ **getType**(): `MessageType`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\>

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
| `a` | `undefined` \| [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md) \| `PlainMessage`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\> |
| `b` | `undefined` \| [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md) \| `PlainMessage`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:2295

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Defined in

src/base.scailo_pb.ts:2283

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Defined in

src/base.scailo_pb.ts:2287

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Defined in

src/base.scailo_pb.ts:2291
