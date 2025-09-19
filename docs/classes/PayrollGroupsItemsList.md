[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupsItemsList

# Class: PayrollGroupsItemsList

Describes the message consisting of the list of payroll group params

**`Generated`**

from message Scailo.PayrollGroupsItemsList

## Hierarchy

- `Message`\<[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)\>

  ↳ **`PayrollGroupsItemsList`**

## Table of contents

### Constructors

- [constructor](PayrollGroupsItemsList.md#constructor)

### Properties

- [list](PayrollGroupsItemsList.md#list)
- [fields](PayrollGroupsItemsList.md#fields)
- [runtime](PayrollGroupsItemsList.md#runtime)
- [typeName](PayrollGroupsItemsList.md#typename)

### Methods

- [clone](PayrollGroupsItemsList.md#clone)
- [equals](PayrollGroupsItemsList.md#equals)
- [fromBinary](PayrollGroupsItemsList.md#frombinary)
- [fromJson](PayrollGroupsItemsList.md#fromjson)
- [fromJsonString](PayrollGroupsItemsList.md#fromjsonstring)
- [getType](PayrollGroupsItemsList.md#gettype)
- [toBinary](PayrollGroupsItemsList.md#tobinary)
- [toJSON](PayrollGroupsItemsList.md#tojson)
- [toJson](PayrollGroupsItemsList.md#tojson-1)
- [toJsonString](PayrollGroupsItemsList.md#tojsonstring)
- [equals](PayrollGroupsItemsList.md#equals-1)
- [fromBinary](PayrollGroupsItemsList.md#frombinary-1)
- [fromJson](PayrollGroupsItemsList.md#fromjson-1)
- [fromJsonString](PayrollGroupsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupsItemsList**(`data?`): [`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)\> |

#### Returns

[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

#### Overrides

Message\&lt;PayrollGroupsItemsList\&gt;.constructor

#### Defined in

[src/payroll_groups.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L812)

## Properties

### list

• **list**: [`PayrollGroupItem`](PayrollGroupItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PayrollGroupItem list = 1;

#### Defined in

[src/payroll_groups.scailo_pb.ts:810](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L810)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_groups.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L819)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_groups.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L817)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupsItemsList"``

#### Defined in

[src/payroll_groups.scailo_pb.ts:818](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L818)

## Methods

### clone

▸ **clone**(): [`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

Create a deep copy.

#### Returns

[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupsItemsList`](PayrollGroupsItemsList.md) \| `PlainMessage`\<[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)\>

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
| `a` | `undefined` \| [`PayrollGroupsItemsList`](PayrollGroupsItemsList.md) \| `PlainMessage`\<[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)\> |
| `b` | `undefined` \| [`PayrollGroupsItemsList`](PayrollGroupsItemsList.md) \| `PlainMessage`\<[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_groups.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L835)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L823)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:827](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L827)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsItemsList`](PayrollGroupsItemsList.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L831)
