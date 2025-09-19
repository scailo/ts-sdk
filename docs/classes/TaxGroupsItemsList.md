[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsItemsList

# Class: TaxGroupsItemsList

Describes the message consisting of the list of tax group params

**`Generated`**

from message Scailo.TaxGroupsItemsList

## Hierarchy

- `Message`\<[`TaxGroupsItemsList`](TaxGroupsItemsList.md)\>

  ↳ **`TaxGroupsItemsList`**

## Table of contents

### Constructors

- [constructor](TaxGroupsItemsList.md#constructor)

### Properties

- [list](TaxGroupsItemsList.md#list)
- [fields](TaxGroupsItemsList.md#fields)
- [runtime](TaxGroupsItemsList.md#runtime)
- [typeName](TaxGroupsItemsList.md#typename)

### Methods

- [clone](TaxGroupsItemsList.md#clone)
- [equals](TaxGroupsItemsList.md#equals)
- [fromBinary](TaxGroupsItemsList.md#frombinary)
- [fromJson](TaxGroupsItemsList.md#fromjson)
- [fromJsonString](TaxGroupsItemsList.md#fromjsonstring)
- [getType](TaxGroupsItemsList.md#gettype)
- [toBinary](TaxGroupsItemsList.md#tobinary)
- [toJSON](TaxGroupsItemsList.md#tojson)
- [toJson](TaxGroupsItemsList.md#tojson-1)
- [toJsonString](TaxGroupsItemsList.md#tojsonstring)
- [equals](TaxGroupsItemsList.md#equals-1)
- [fromBinary](TaxGroupsItemsList.md#frombinary-1)
- [fromJson](TaxGroupsItemsList.md#fromjson-1)
- [fromJsonString](TaxGroupsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsItemsList**(`data?`): [`TaxGroupsItemsList`](TaxGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsItemsList`](TaxGroupsItemsList.md)\> |

#### Returns

[`TaxGroupsItemsList`](TaxGroupsItemsList.md)

#### Overrides

Message\&lt;TaxGroupsItemsList\&gt;.constructor

#### Defined in

[src/tax_groups.scailo_pb.ts:1279](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1279)

## Properties

### list

• **list**: [`TaxGroupItem`](TaxGroupItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.TaxGroupItem list = 1;

#### Defined in

[src/tax_groups.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1277)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/tax_groups.scailo_pb.ts:1286](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1286)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/tax_groups.scailo_pb.ts:1284](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1284)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsItemsList"``

#### Defined in

[src/tax_groups.scailo_pb.ts:1285](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1285)

## Methods

### clone

▸ **clone**(): [`TaxGroupsItemsList`](TaxGroupsItemsList.md)

Create a deep copy.

#### Returns

[`TaxGroupsItemsList`](TaxGroupsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsItemsList`](TaxGroupsItemsList.md) \| `PlainMessage`\<[`TaxGroupsItemsList`](TaxGroupsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsItemsList`](TaxGroupsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsItemsList`](TaxGroupsItemsList.md)\>

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
| `a` | `undefined` \| [`TaxGroupsItemsList`](TaxGroupsItemsList.md) \| `PlainMessage`\<[`TaxGroupsItemsList`](TaxGroupsItemsList.md)\> |
| `b` | `undefined` \| [`TaxGroupsItemsList`](TaxGroupsItemsList.md) \| `PlainMessage`\<[`TaxGroupsItemsList`](TaxGroupsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/tax_groups.scailo_pb.ts:1302](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1302)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsItemsList`](TaxGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsItemsList`](TaxGroupsItemsList.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1290](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1290)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsItemsList`](TaxGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsItemsList`](TaxGroupsItemsList.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1294)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsItemsList`](TaxGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsItemsList`](TaxGroupsItemsList.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1298](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1298)
