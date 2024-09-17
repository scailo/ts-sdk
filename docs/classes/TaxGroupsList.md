[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsList

# Class: TaxGroupsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.TaxGroupsList

## Hierarchy

- `Message`\<[`TaxGroupsList`](TaxGroupsList.md)\>

  ↳ **`TaxGroupsList`**

## Table of contents

### Constructors

- [constructor](TaxGroupsList.md#constructor)

### Properties

- [list](TaxGroupsList.md#list)
- [fields](TaxGroupsList.md#fields)
- [runtime](TaxGroupsList.md#runtime)
- [typeName](TaxGroupsList.md#typename)

### Methods

- [clone](TaxGroupsList.md#clone)
- [equals](TaxGroupsList.md#equals)
- [fromBinary](TaxGroupsList.md#frombinary)
- [fromJson](TaxGroupsList.md#fromjson)
- [fromJsonString](TaxGroupsList.md#fromjsonstring)
- [getType](TaxGroupsList.md#gettype)
- [toBinary](TaxGroupsList.md#tobinary)
- [toJSON](TaxGroupsList.md#tojson)
- [toJson](TaxGroupsList.md#tojson-1)
- [toJsonString](TaxGroupsList.md#tojsonstring)
- [equals](TaxGroupsList.md#equals-1)
- [fromBinary](TaxGroupsList.md#frombinary-1)
- [fromJson](TaxGroupsList.md#fromjson-1)
- [fromJsonString](TaxGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsList**(`data?`): [`TaxGroupsList`](TaxGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsList`](TaxGroupsList.md)\> |

#### Returns

[`TaxGroupsList`](TaxGroupsList.md)

#### Overrides

Message\&lt;TaxGroupsList\&gt;.constructor

#### Defined in

src/tax_groups.scailo_pb.ts:405

## Properties

### list

• **list**: [`TaxGroup`](TaxGroup.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.TaxGroup list = 1;

#### Defined in

src/tax_groups.scailo_pb.ts:403

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_groups.scailo_pb.ts:412

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_groups.scailo_pb.ts:410

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsList"``

#### Defined in

src/tax_groups.scailo_pb.ts:411

## Methods

### clone

▸ **clone**(): [`TaxGroupsList`](TaxGroupsList.md)

Create a deep copy.

#### Returns

[`TaxGroupsList`](TaxGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsList`](TaxGroupsList.md) \| `PlainMessage`\<[`TaxGroupsList`](TaxGroupsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsList`](TaxGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsList`](TaxGroupsList.md)\>

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
| `a` | `undefined` \| [`TaxGroupsList`](TaxGroupsList.md) \| `PlainMessage`\<[`TaxGroupsList`](TaxGroupsList.md)\> |
| `b` | `undefined` \| [`TaxGroupsList`](TaxGroupsList.md) \| `PlainMessage`\<[`TaxGroupsList`](TaxGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_groups.scailo_pb.ts:428

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsList`](TaxGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsList`](TaxGroupsList.md)

#### Defined in

src/tax_groups.scailo_pb.ts:416

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsList`](TaxGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsList`](TaxGroupsList.md)

#### Defined in

src/tax_groups.scailo_pb.ts:420

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsList`](TaxGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsList`](TaxGroupsList.md)

#### Defined in

src/tax_groups.scailo_pb.ts:424
