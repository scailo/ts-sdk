[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupsServicePaginationResponse

# Class: PayrollGroupsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.PayrollGroupsServicePaginationResponse

## Hierarchy

- `Message`\<[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)\>

  ↳ **`PayrollGroupsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PayrollGroupsServicePaginationResponse.md#constructor)

### Properties

- [count](PayrollGroupsServicePaginationResponse.md#count)
- [offset](PayrollGroupsServicePaginationResponse.md#offset)
- [payload](PayrollGroupsServicePaginationResponse.md#payload)
- [total](PayrollGroupsServicePaginationResponse.md#total)
- [fields](PayrollGroupsServicePaginationResponse.md#fields)
- [runtime](PayrollGroupsServicePaginationResponse.md#runtime)
- [typeName](PayrollGroupsServicePaginationResponse.md#typename)

### Methods

- [clone](PayrollGroupsServicePaginationResponse.md#clone)
- [equals](PayrollGroupsServicePaginationResponse.md#equals)
- [fromBinary](PayrollGroupsServicePaginationResponse.md#frombinary)
- [fromJson](PayrollGroupsServicePaginationResponse.md#fromjson)
- [fromJsonString](PayrollGroupsServicePaginationResponse.md#fromjsonstring)
- [getType](PayrollGroupsServicePaginationResponse.md#gettype)
- [toBinary](PayrollGroupsServicePaginationResponse.md#tobinary)
- [toJSON](PayrollGroupsServicePaginationResponse.md#tojson)
- [toJson](PayrollGroupsServicePaginationResponse.md#tojson-1)
- [toJsonString](PayrollGroupsServicePaginationResponse.md#tojsonstring)
- [equals](PayrollGroupsServicePaginationResponse.md#equals-1)
- [fromBinary](PayrollGroupsServicePaginationResponse.md#frombinary-1)
- [fromJson](PayrollGroupsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PayrollGroupsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupsServicePaginationResponse**(`data?`): [`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)\> |

#### Returns

[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

#### Overrides

Message\&lt;PayrollGroupsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/payroll_groups.scailo_pb.ts:1007](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1007)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/payroll_groups.scailo_pb.ts:984](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L984)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/payroll_groups.scailo_pb.ts:991](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L991)

___

### payload

• **payload**: [`PayrollGroup`](PayrollGroup.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.PayrollGroup payload = 4;

#### Defined in

[src/payroll_groups.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1005)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/payroll_groups.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L998)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1014)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1012)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupsServicePaginationResponse"``

#### Defined in

[src/payroll_groups.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1013)

## Methods

### clone

▸ **clone**(): [`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_groups.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1033)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1021)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1025](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1025)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServicePaginationResponse`](PayrollGroupsServicePaginationResponse.md)

#### Defined in

[src/payroll_groups.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_groups.scailo_pb.ts#L1029)
