[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupItemHistoryRequest

# Class: PayrollGroupItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.PayrollGroupItemHistoryRequest

## Hierarchy

- `Message`\<[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)\>

  ↳ **`PayrollGroupItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](PayrollGroupItemHistoryRequest.md#constructor)

### Properties

- [payrollGroupId](PayrollGroupItemHistoryRequest.md#payrollgroupid)
- [payrollParamId](PayrollGroupItemHistoryRequest.md#payrollparamid)
- [fields](PayrollGroupItemHistoryRequest.md#fields)
- [runtime](PayrollGroupItemHistoryRequest.md#runtime)
- [typeName](PayrollGroupItemHistoryRequest.md#typename)

### Methods

- [clone](PayrollGroupItemHistoryRequest.md#clone)
- [equals](PayrollGroupItemHistoryRequest.md#equals)
- [fromBinary](PayrollGroupItemHistoryRequest.md#frombinary)
- [fromJson](PayrollGroupItemHistoryRequest.md#fromjson)
- [fromJsonString](PayrollGroupItemHistoryRequest.md#fromjsonstring)
- [getType](PayrollGroupItemHistoryRequest.md#gettype)
- [toBinary](PayrollGroupItemHistoryRequest.md#tobinary)
- [toJSON](PayrollGroupItemHistoryRequest.md#tojson)
- [toJson](PayrollGroupItemHistoryRequest.md#tojson-1)
- [toJsonString](PayrollGroupItemHistoryRequest.md#tojsonstring)
- [equals](PayrollGroupItemHistoryRequest.md#equals-1)
- [fromBinary](PayrollGroupItemHistoryRequest.md#frombinary-1)
- [fromJson](PayrollGroupItemHistoryRequest.md#fromjson-1)
- [fromJsonString](PayrollGroupItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupItemHistoryRequest**(`data?`): [`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)\> |

#### Returns

[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

#### Overrides

Message\&lt;PayrollGroupItemHistoryRequest\&gt;.constructor

#### Defined in

src/payroll_groups.scailo_pb.ts:861

## Properties

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the payroll group

**`Generated`**

from field: uint64 payroll_group_id = 10;

#### Defined in

src/payroll_groups.scailo_pb.ts:852

___

### payrollParamId

• **payrollParamId**: `bigint` = `protoInt64.zero`

The ID of the payroll param that is a part of the payroll group

**`Generated`**

from field: uint64 payroll_param_id = 11;

#### Defined in

src/payroll_groups.scailo_pb.ts:859

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_groups.scailo_pb.ts:868

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_groups.scailo_pb.ts:866

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupItemHistoryRequest"``

#### Defined in

src/payroll_groups.scailo_pb.ts:867

## Methods

### clone

▸ **clone**(): [`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md) \| `PlainMessage`\<[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md) \| `PlainMessage`\<[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md) \| `PlainMessage`\<[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_groups.scailo_pb.ts:885

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:873

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:877

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupItemHistoryRequest`](PayrollGroupItemHistoryRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:881
