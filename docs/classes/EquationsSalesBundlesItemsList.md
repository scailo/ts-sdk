[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesItemsList

# Class: EquationsSalesBundlesItemsList

Describes the message consisting of the list of equation sales bundle items

**`Generated`**

from message Scailo.EquationsSalesBundlesItemsList

## Hierarchy

- `Message`\<[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)\>

  ↳ **`EquationsSalesBundlesItemsList`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesItemsList.md#constructor)

### Properties

- [list](EquationsSalesBundlesItemsList.md#list)
- [fields](EquationsSalesBundlesItemsList.md#fields)
- [runtime](EquationsSalesBundlesItemsList.md#runtime)
- [typeName](EquationsSalesBundlesItemsList.md#typename)

### Methods

- [clone](EquationsSalesBundlesItemsList.md#clone)
- [equals](EquationsSalesBundlesItemsList.md#equals)
- [fromBinary](EquationsSalesBundlesItemsList.md#frombinary)
- [fromJson](EquationsSalesBundlesItemsList.md#fromjson)
- [fromJsonString](EquationsSalesBundlesItemsList.md#fromjsonstring)
- [getType](EquationsSalesBundlesItemsList.md#gettype)
- [toBinary](EquationsSalesBundlesItemsList.md#tobinary)
- [toJSON](EquationsSalesBundlesItemsList.md#tojson)
- [toJson](EquationsSalesBundlesItemsList.md#tojson-1)
- [toJsonString](EquationsSalesBundlesItemsList.md#tojsonstring)
- [equals](EquationsSalesBundlesItemsList.md#equals-1)
- [fromBinary](EquationsSalesBundlesItemsList.md#frombinary-1)
- [fromJson](EquationsSalesBundlesItemsList.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesItemsList**(`data?`): [`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)\> |

#### Returns

[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

#### Overrides

Message\&lt;EquationsSalesBundlesItemsList\&gt;.constructor

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:831

## Properties

### list

• **list**: [`EquationSalesBundleItem`](EquationSalesBundleItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.EquationSalesBundleItem list = 1;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:829

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:838

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:836

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsSalesBundlesItemsList"``

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:837

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md) \| `PlainMessage`\<[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md) \| `PlainMessage`\<[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md) \| `PlainMessage`\<[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:854

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:842

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:846

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesItemsList`](EquationsSalesBundlesItemsList.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:850
