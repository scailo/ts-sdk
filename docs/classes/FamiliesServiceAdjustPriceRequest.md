[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceAdjustPriceRequest

# Class: FamiliesServiceAdjustPriceRequest

Describes the parameters necessary to adjust a family's price

**`Generated`**

from message Scailo.FamiliesServiceAdjustPriceRequest

## Hierarchy

- `Message`\<[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)\>

  ↳ **`FamiliesServiceAdjustPriceRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceAdjustPriceRequest.md#constructor)

### Properties

- [price](FamiliesServiceAdjustPriceRequest.md#price)
- [userComment](FamiliesServiceAdjustPriceRequest.md#usercomment)
- [uuid](FamiliesServiceAdjustPriceRequest.md#uuid)
- [fields](FamiliesServiceAdjustPriceRequest.md#fields)
- [runtime](FamiliesServiceAdjustPriceRequest.md#runtime)
- [typeName](FamiliesServiceAdjustPriceRequest.md#typename)

### Methods

- [clone](FamiliesServiceAdjustPriceRequest.md#clone)
- [equals](FamiliesServiceAdjustPriceRequest.md#equals)
- [fromBinary](FamiliesServiceAdjustPriceRequest.md#frombinary)
- [fromJson](FamiliesServiceAdjustPriceRequest.md#fromjson)
- [fromJsonString](FamiliesServiceAdjustPriceRequest.md#fromjsonstring)
- [getType](FamiliesServiceAdjustPriceRequest.md#gettype)
- [toBinary](FamiliesServiceAdjustPriceRequest.md#tobinary)
- [toJSON](FamiliesServiceAdjustPriceRequest.md#tojson)
- [toJson](FamiliesServiceAdjustPriceRequest.md#tojson-1)
- [toJsonString](FamiliesServiceAdjustPriceRequest.md#tojsonstring)
- [equals](FamiliesServiceAdjustPriceRequest.md#equals-1)
- [fromBinary](FamiliesServiceAdjustPriceRequest.md#frombinary-1)
- [fromJson](FamiliesServiceAdjustPriceRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceAdjustPriceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceAdjustPriceRequest**(`data?`): [`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)\> |

#### Returns

[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

#### Overrides

Message\&lt;FamiliesServiceAdjustPriceRequest\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:2597

## Properties

### price

• **price**: `bigint` = `protoInt64.zero`

Stores the unit price

**`Generated`**

from field: uint64 price = 26;

#### Defined in

src/families.scailo_pb.ts:2595

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/families.scailo_pb.ts:2581

___

### uuid

• **uuid**: `string` = `""`

The UUID of the family

**`Generated`**

from field: string uuid = 10;

#### Defined in

src/families.scailo_pb.ts:2588

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:2604

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:2602

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceAdjustPriceRequest"``

#### Defined in

src/families.scailo_pb.ts:2603

## Methods

### clone

▸ **clone**(): [`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md) \| `PlainMessage`\<[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md) \| `PlainMessage`\<[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md) \| `PlainMessage`\<[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:2622

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

#### Defined in

src/families.scailo_pb.ts:2610

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

#### Defined in

src/families.scailo_pb.ts:2614

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceAdjustPriceRequest`](FamiliesServiceAdjustPriceRequest.md)

#### Defined in

src/families.scailo_pb.ts:2618
