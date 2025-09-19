[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParamsServicePaginationResponse

# Class: PayrollParamsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.PayrollParamsServicePaginationResponse

## Hierarchy

- `Message`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\>

  ↳ **`PayrollParamsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PayrollParamsServicePaginationResponse.md#constructor)

### Properties

- [count](PayrollParamsServicePaginationResponse.md#count)
- [offset](PayrollParamsServicePaginationResponse.md#offset)
- [payload](PayrollParamsServicePaginationResponse.md#payload)
- [total](PayrollParamsServicePaginationResponse.md#total)
- [fields](PayrollParamsServicePaginationResponse.md#fields)
- [runtime](PayrollParamsServicePaginationResponse.md#runtime)
- [typeName](PayrollParamsServicePaginationResponse.md#typename)

### Methods

- [clone](PayrollParamsServicePaginationResponse.md#clone)
- [equals](PayrollParamsServicePaginationResponse.md#equals)
- [fromBinary](PayrollParamsServicePaginationResponse.md#frombinary)
- [fromJson](PayrollParamsServicePaginationResponse.md#fromjson)
- [fromJsonString](PayrollParamsServicePaginationResponse.md#fromjsonstring)
- [getType](PayrollParamsServicePaginationResponse.md#gettype)
- [toBinary](PayrollParamsServicePaginationResponse.md#tobinary)
- [toJSON](PayrollParamsServicePaginationResponse.md#tojson)
- [toJson](PayrollParamsServicePaginationResponse.md#tojson-1)
- [toJsonString](PayrollParamsServicePaginationResponse.md#tojsonstring)
- [equals](PayrollParamsServicePaginationResponse.md#equals-1)
- [fromBinary](PayrollParamsServicePaginationResponse.md#frombinary-1)
- [fromJson](PayrollParamsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PayrollParamsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParamsServicePaginationResponse**(`data?`): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\> |

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Overrides

Message\&lt;PayrollParamsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/payroll_params.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L514)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/payroll_params.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L491)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/payroll_params.scailo_pb.ts:498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L498)

___

### payload

• **payload**: [`PayrollParam`](PayrollParam.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.PayrollParam payload = 4;

#### Defined in

[src/payroll_params.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L512)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/payroll_params.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L505)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_params.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L521)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_params.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L519)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParamsServicePaginationResponse"``

#### Defined in

[src/payroll_params.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L520)

## Methods

### clone

▸ **clone**(): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_params.scailo_pb.ts:540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L540)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L528)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L532)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:536](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L536)
