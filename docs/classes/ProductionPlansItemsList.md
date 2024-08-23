[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansItemsList

# Class: ProductionPlansItemsList

Describes the message consisting of the list of production plan items

**`Generated`**

from message Scailo.ProductionPlansItemsList

## Hierarchy

- `Message`\<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\>

  ↳ **`ProductionPlansItemsList`**

## Table of contents

### Constructors

- [constructor](ProductionPlansItemsList.md#constructor)

### Properties

- [list](ProductionPlansItemsList.md#list)
- [fields](ProductionPlansItemsList.md#fields)
- [runtime](ProductionPlansItemsList.md#runtime)
- [typeName](ProductionPlansItemsList.md#typename)

### Methods

- [clone](ProductionPlansItemsList.md#clone)
- [equals](ProductionPlansItemsList.md#equals)
- [fromBinary](ProductionPlansItemsList.md#frombinary)
- [fromJson](ProductionPlansItemsList.md#fromjson)
- [fromJsonString](ProductionPlansItemsList.md#fromjsonstring)
- [getType](ProductionPlansItemsList.md#gettype)
- [toBinary](ProductionPlansItemsList.md#tobinary)
- [toJSON](ProductionPlansItemsList.md#tojson)
- [toJson](ProductionPlansItemsList.md#tojson-1)
- [toJsonString](ProductionPlansItemsList.md#tojsonstring)
- [equals](ProductionPlansItemsList.md#equals-1)
- [fromBinary](ProductionPlansItemsList.md#frombinary-1)
- [fromJson](ProductionPlansItemsList.md#fromjson-1)
- [fromJsonString](ProductionPlansItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansItemsList**(`data?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Overrides

Message\&lt;ProductionPlansItemsList\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:987

## Properties

### list

• **list**: [`ProductionPlanItem`](ProductionPlanItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ProductionPlanItem list = 1;

#### Defined in

src/production_plans.scailo_pb.ts:985

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:994

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:992

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansItemsList"``

#### Defined in

src/production_plans.scailo_pb.ts:993

## Methods

### clone

▸ **clone**(): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

Create a deep copy.

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansItemsList`](ProductionPlansItemsList.md) \| `PlainMessage`\<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\>

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
| `a` | `undefined` \| [`ProductionPlansItemsList`](ProductionPlansItemsList.md) \| `PlainMessage`\<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\> |
| `b` | `undefined` \| [`ProductionPlansItemsList`](ProductionPlansItemsList.md) \| `PlainMessage`\<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:1010

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Defined in

src/production_plans.scailo_pb.ts:998

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Defined in

src/production_plans.scailo_pb.ts:1002

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Defined in

src/production_plans.scailo_pb.ts:1006
