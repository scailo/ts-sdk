[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsServicePaginationResponse

# Class: TaxGroupsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.TaxGroupsServicePaginationResponse

## Hierarchy

- `Message`\<[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)\>

  ↳ **`TaxGroupsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](TaxGroupsServicePaginationResponse.md#constructor)

### Properties

- [count](TaxGroupsServicePaginationResponse.md#count)
- [offset](TaxGroupsServicePaginationResponse.md#offset)
- [payload](TaxGroupsServicePaginationResponse.md#payload)
- [total](TaxGroupsServicePaginationResponse.md#total)
- [fields](TaxGroupsServicePaginationResponse.md#fields)
- [runtime](TaxGroupsServicePaginationResponse.md#runtime)
- [typeName](TaxGroupsServicePaginationResponse.md#typename)

### Methods

- [clone](TaxGroupsServicePaginationResponse.md#clone)
- [equals](TaxGroupsServicePaginationResponse.md#equals)
- [fromBinary](TaxGroupsServicePaginationResponse.md#frombinary)
- [fromJson](TaxGroupsServicePaginationResponse.md#fromjson)
- [fromJsonString](TaxGroupsServicePaginationResponse.md#fromjsonstring)
- [getType](TaxGroupsServicePaginationResponse.md#gettype)
- [toBinary](TaxGroupsServicePaginationResponse.md#tobinary)
- [toJSON](TaxGroupsServicePaginationResponse.md#tojson)
- [toJson](TaxGroupsServicePaginationResponse.md#tojson-1)
- [toJsonString](TaxGroupsServicePaginationResponse.md#tojsonstring)
- [equals](TaxGroupsServicePaginationResponse.md#equals-1)
- [fromBinary](TaxGroupsServicePaginationResponse.md#frombinary-1)
- [fromJson](TaxGroupsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](TaxGroupsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsServicePaginationResponse**(`data?`): [`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)\> |

#### Returns

[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

#### Overrides

Message\&lt;TaxGroupsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/tax_groups.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L582)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/tax_groups.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L559)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/tax_groups.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L566)

___

### payload

• **payload**: [`TaxGroup`](TaxGroup.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.TaxGroup payload = 4;

#### Defined in

[src/tax_groups.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L580)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/tax_groups.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L573)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/tax_groups.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L589)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/tax_groups.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L587)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsServicePaginationResponse"``

#### Defined in

[src/tax_groups.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L588)

## Methods

### clone

▸ **clone**(): [`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/tax_groups.scailo_pb.ts:608](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L608)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L596)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:600](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L600)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServicePaginationResponse`](TaxGroupsServicePaginationResponse.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L604)
