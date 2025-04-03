[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansList

# Class: ProductionPlansList

Describes the message consisting of the list of production plans

**`Generated`**

from message Scailo.ProductionPlansList

## Hierarchy

- `Message`\<[`ProductionPlansList`](ProductionPlansList.md)\>

  ↳ **`ProductionPlansList`**

## Table of contents

### Constructors

- [constructor](ProductionPlansList.md#constructor)

### Properties

- [list](ProductionPlansList.md#list)
- [fields](ProductionPlansList.md#fields)
- [runtime](ProductionPlansList.md#runtime)
- [typeName](ProductionPlansList.md#typename)

### Methods

- [clone](ProductionPlansList.md#clone)
- [equals](ProductionPlansList.md#equals)
- [fromBinary](ProductionPlansList.md#frombinary)
- [fromJson](ProductionPlansList.md#fromjson)
- [fromJsonString](ProductionPlansList.md#fromjsonstring)
- [getType](ProductionPlansList.md#gettype)
- [toBinary](ProductionPlansList.md#tobinary)
- [toJSON](ProductionPlansList.md#tojson)
- [toJson](ProductionPlansList.md#tojson-1)
- [toJsonString](ProductionPlansList.md#tojsonstring)
- [equals](ProductionPlansList.md#equals-1)
- [fromBinary](ProductionPlansList.md#frombinary-1)
- [fromJson](ProductionPlansList.md#fromjson-1)
- [fromJsonString](ProductionPlansList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansList**(`data?`): [`ProductionPlansList`](ProductionPlansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansList`](ProductionPlansList.md)\> |

#### Returns

[`ProductionPlansList`](ProductionPlansList.md)

#### Overrides

Message\&lt;ProductionPlansList\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:1022

## Properties

### list

• **list**: [`ProductionPlan`](ProductionPlan.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ProductionPlan list = 1;

#### Defined in

src/production_plans.scailo_pb.ts:1020

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:1029

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:1027

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansList"``

#### Defined in

src/production_plans.scailo_pb.ts:1028

## Methods

### clone

▸ **clone**(): [`ProductionPlansList`](ProductionPlansList.md)

Create a deep copy.

#### Returns

[`ProductionPlansList`](ProductionPlansList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansList`](ProductionPlansList.md) \| `PlainMessage`\<[`ProductionPlansList`](ProductionPlansList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansList`](ProductionPlansList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansList`](ProductionPlansList.md)\>

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
| `a` | `undefined` \| [`ProductionPlansList`](ProductionPlansList.md) \| `PlainMessage`\<[`ProductionPlansList`](ProductionPlansList.md)\> |
| `b` | `undefined` \| [`ProductionPlansList`](ProductionPlansList.md) \| `PlainMessage`\<[`ProductionPlansList`](ProductionPlansList.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:1045

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansList`](ProductionPlansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansList`](ProductionPlansList.md)

#### Defined in

src/production_plans.scailo_pb.ts:1033

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansList`](ProductionPlansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansList`](ProductionPlansList.md)

#### Defined in

src/production_plans.scailo_pb.ts:1037

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansList`](ProductionPlansList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansList`](ProductionPlansList.md)

#### Defined in

src/production_plans.scailo_pb.ts:1041
