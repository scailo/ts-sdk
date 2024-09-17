[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParamsList

# Class: PayrollParamsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.PayrollParamsList

## Hierarchy

- `Message`\<[`PayrollParamsList`](PayrollParamsList.md)\>

  ↳ **`PayrollParamsList`**

## Table of contents

### Constructors

- [constructor](PayrollParamsList.md#constructor)

### Properties

- [list](PayrollParamsList.md#list)
- [fields](PayrollParamsList.md#fields)
- [runtime](PayrollParamsList.md#runtime)
- [typeName](PayrollParamsList.md#typename)

### Methods

- [clone](PayrollParamsList.md#clone)
- [equals](PayrollParamsList.md#equals)
- [fromBinary](PayrollParamsList.md#frombinary)
- [fromJson](PayrollParamsList.md#fromjson)
- [fromJsonString](PayrollParamsList.md#fromjsonstring)
- [getType](PayrollParamsList.md#gettype)
- [toBinary](PayrollParamsList.md#tobinary)
- [toJSON](PayrollParamsList.md#tojson)
- [toJson](PayrollParamsList.md#tojson-1)
- [toJsonString](PayrollParamsList.md#tojsonstring)
- [equals](PayrollParamsList.md#equals-1)
- [fromBinary](PayrollParamsList.md#frombinary-1)
- [fromJson](PayrollParamsList.md#fromjson-1)
- [fromJsonString](PayrollParamsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParamsList**(`data?`): [`PayrollParamsList`](PayrollParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParamsList`](PayrollParamsList.md)\> |

#### Returns

[`PayrollParamsList`](PayrollParamsList.md)

#### Overrides

Message\&lt;PayrollParamsList\&gt;.constructor

#### Defined in

src/payroll_params.scailo_pb.ts:369

## Properties

### list

• **list**: [`PayrollParam`](PayrollParam.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PayrollParam list = 1;

#### Defined in

src/payroll_params.scailo_pb.ts:367

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_params.scailo_pb.ts:376

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_params.scailo_pb.ts:374

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParamsList"``

#### Defined in

src/payroll_params.scailo_pb.ts:375

## Methods

### clone

▸ **clone**(): [`PayrollParamsList`](PayrollParamsList.md)

Create a deep copy.

#### Returns

[`PayrollParamsList`](PayrollParamsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParamsList`](PayrollParamsList.md) \| `PlainMessage`\<[`PayrollParamsList`](PayrollParamsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParamsList`](PayrollParamsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParamsList`](PayrollParamsList.md)\>

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
| `a` | `undefined` \| [`PayrollParamsList`](PayrollParamsList.md) \| `PlainMessage`\<[`PayrollParamsList`](PayrollParamsList.md)\> |
| `b` | `undefined` \| [`PayrollParamsList`](PayrollParamsList.md) \| `PlainMessage`\<[`PayrollParamsList`](PayrollParamsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_params.scailo_pb.ts:392

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParamsList`](PayrollParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParamsList`](PayrollParamsList.md)

#### Defined in

src/payroll_params.scailo_pb.ts:380

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParamsList`](PayrollParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsList`](PayrollParamsList.md)

#### Defined in

src/payroll_params.scailo_pb.ts:384

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParamsList`](PayrollParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsList`](PayrollParamsList.md)

#### Defined in

src/payroll_params.scailo_pb.ts:388
