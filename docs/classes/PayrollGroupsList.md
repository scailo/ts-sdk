[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupsList

# Class: PayrollGroupsList

Describes the message consisting of the list of payroll groups

**`Generated`**

from message Scailo.PayrollGroupsList

## Hierarchy

- `Message`\<[`PayrollGroupsList`](PayrollGroupsList.md)\>

  ↳ **`PayrollGroupsList`**

## Table of contents

### Constructors

- [constructor](PayrollGroupsList.md#constructor)

### Properties

- [list](PayrollGroupsList.md#list)
- [fields](PayrollGroupsList.md#fields)
- [runtime](PayrollGroupsList.md#runtime)
- [typeName](PayrollGroupsList.md#typename)

### Methods

- [clone](PayrollGroupsList.md#clone)
- [equals](PayrollGroupsList.md#equals)
- [fromBinary](PayrollGroupsList.md#frombinary)
- [fromJson](PayrollGroupsList.md#fromjson)
- [fromJsonString](PayrollGroupsList.md#fromjsonstring)
- [getType](PayrollGroupsList.md#gettype)
- [toBinary](PayrollGroupsList.md#tobinary)
- [toJSON](PayrollGroupsList.md#tojson)
- [toJson](PayrollGroupsList.md#tojson-1)
- [toJsonString](PayrollGroupsList.md#tojsonstring)
- [equals](PayrollGroupsList.md#equals-1)
- [fromBinary](PayrollGroupsList.md#frombinary-1)
- [fromJson](PayrollGroupsList.md#fromjson-1)
- [fromJsonString](PayrollGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupsList**(`data?`): [`PayrollGroupsList`](PayrollGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupsList`](PayrollGroupsList.md)\> |

#### Returns

[`PayrollGroupsList`](PayrollGroupsList.md)

#### Overrides

Message\&lt;PayrollGroupsList\&gt;.constructor

#### Defined in

[src/payroll_groups.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L770)

## Properties

### list

• **list**: [`PayrollGroup`](PayrollGroup.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PayrollGroup list = 1;

#### Defined in

[src/payroll_groups.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L768)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_groups.scailo_pb.ts:777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L777)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_groups.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L775)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupsList"``

#### Defined in

[src/payroll_groups.scailo_pb.ts:776](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L776)

## Methods

### clone

▸ **clone**(): [`PayrollGroupsList`](PayrollGroupsList.md)

Create a deep copy.

#### Returns

[`PayrollGroupsList`](PayrollGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupsList`](PayrollGroupsList.md) \| `PlainMessage`\<[`PayrollGroupsList`](PayrollGroupsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupsList`](PayrollGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupsList`](PayrollGroupsList.md)\>

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
| `a` | `undefined` \| [`PayrollGroupsList`](PayrollGroupsList.md) \| `PlainMessage`\<[`PayrollGroupsList`](PayrollGroupsList.md)\> |
| `b` | `undefined` \| [`PayrollGroupsList`](PayrollGroupsList.md) \| `PlainMessage`\<[`PayrollGroupsList`](PayrollGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_groups.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L793)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupsList`](PayrollGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupsList`](PayrollGroupsList.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L781)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupsList`](PayrollGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsList`](PayrollGroupsList.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L785)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupsList`](PayrollGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsList`](PayrollGroupsList.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L789)
