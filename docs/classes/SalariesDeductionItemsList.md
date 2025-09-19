[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesDeductionItemsList

# Class: SalariesDeductionItemsList

Describes the message consisting of the list of salary deduction items

**`Generated`**

from message Scailo.SalariesDeductionItemsList

## Hierarchy

- `Message`\<[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)\>

  ↳ **`SalariesDeductionItemsList`**

## Table of contents

### Constructors

- [constructor](SalariesDeductionItemsList.md#constructor)

### Properties

- [list](SalariesDeductionItemsList.md#list)
- [fields](SalariesDeductionItemsList.md#fields)
- [runtime](SalariesDeductionItemsList.md#runtime)
- [typeName](SalariesDeductionItemsList.md#typename)

### Methods

- [clone](SalariesDeductionItemsList.md#clone)
- [equals](SalariesDeductionItemsList.md#equals)
- [fromBinary](SalariesDeductionItemsList.md#frombinary)
- [fromJson](SalariesDeductionItemsList.md#fromjson)
- [fromJsonString](SalariesDeductionItemsList.md#fromjsonstring)
- [getType](SalariesDeductionItemsList.md#gettype)
- [toBinary](SalariesDeductionItemsList.md#tobinary)
- [toJSON](SalariesDeductionItemsList.md#tojson)
- [toJson](SalariesDeductionItemsList.md#tojson-1)
- [toJsonString](SalariesDeductionItemsList.md#tojsonstring)
- [equals](SalariesDeductionItemsList.md#equals-1)
- [fromBinary](SalariesDeductionItemsList.md#frombinary-1)
- [fromJson](SalariesDeductionItemsList.md#fromjson-1)
- [fromJsonString](SalariesDeductionItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesDeductionItemsList**(`data?`): [`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)\> |

#### Returns

[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

#### Overrides

Message\&lt;SalariesDeductionItemsList\&gt;.constructor

#### Defined in

[src/salaries.scailo_pb.ts:1520](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1520)

## Properties

### list

• **list**: [`SalaryDeductionItem`](SalaryDeductionItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalaryDeductionItem list = 1;

#### Defined in

[src/salaries.scailo_pb.ts:1518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1518)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:1527](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1527)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1525)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesDeductionItemsList"``

#### Defined in

[src/salaries.scailo_pb.ts:1526](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1526)

## Methods

### clone

▸ **clone**(): [`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

Create a deep copy.

#### Returns

[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesDeductionItemsList`](SalariesDeductionItemsList.md) \| `PlainMessage`\<[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)\>

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
| `a` | `undefined` \| [`SalariesDeductionItemsList`](SalariesDeductionItemsList.md) \| `PlainMessage`\<[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)\> |
| `b` | `undefined` \| [`SalariesDeductionItemsList`](SalariesDeductionItemsList.md) \| `PlainMessage`\<[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/salaries.scailo_pb.ts:1543](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1543)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

#### Defined in

[src/salaries.scailo_pb.ts:1531](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1531)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

#### Defined in

[src/salaries.scailo_pb.ts:1535](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1535)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesDeductionItemsList`](SalariesDeductionItemsList.md)

#### Defined in

[src/salaries.scailo_pb.ts:1539](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L1539)
