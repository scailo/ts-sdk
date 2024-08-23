[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsReplaceablesServicePaginatedItemsResponse

# Class: EquationsReplaceablesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.EquationsReplaceablesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)\>

  ↳ **`EquationsReplaceablesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](EquationsReplaceablesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](EquationsReplaceablesServicePaginatedItemsResponse.md#count)
- [offset](EquationsReplaceablesServicePaginatedItemsResponse.md#offset)
- [payload](EquationsReplaceablesServicePaginatedItemsResponse.md#payload)
- [total](EquationsReplaceablesServicePaginatedItemsResponse.md#total)
- [fields](EquationsReplaceablesServicePaginatedItemsResponse.md#fields)
- [runtime](EquationsReplaceablesServicePaginatedItemsResponse.md#runtime)
- [typeName](EquationsReplaceablesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](EquationsReplaceablesServicePaginatedItemsResponse.md#clone)
- [equals](EquationsReplaceablesServicePaginatedItemsResponse.md#equals)
- [fromBinary](EquationsReplaceablesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](EquationsReplaceablesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](EquationsReplaceablesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](EquationsReplaceablesServicePaginatedItemsResponse.md#gettype)
- [toBinary](EquationsReplaceablesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](EquationsReplaceablesServicePaginatedItemsResponse.md#tojson)
- [toJson](EquationsReplaceablesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](EquationsReplaceablesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](EquationsReplaceablesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](EquationsReplaceablesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](EquationsReplaceablesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](EquationsReplaceablesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsReplaceablesServicePaginatedItemsResponse**(`data?`): [`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)\> |

#### Returns

[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;EquationsReplaceablesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/equations_replaceables.scailo_pb.ts:1084

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/equations_replaceables.scailo_pb.ts:1061

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/equations_replaceables.scailo_pb.ts:1068

___

### payload

• **payload**: [`EquationReplaceableItem`](EquationReplaceableItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.EquationReplaceableItem payload = 4;

#### Defined in

src/equations_replaceables.scailo_pb.ts:1082

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/equations_replaceables.scailo_pb.ts:1075

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_replaceables.scailo_pb.ts:1091

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_replaceables.scailo_pb.ts:1089

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsReplaceablesServicePaginatedItemsResponse"``

#### Defined in

src/equations_replaceables.scailo_pb.ts:1090

## Methods

### clone

▸ **clone**(): [`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_replaceables.scailo_pb.ts:1110

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:1098

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:1102

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServicePaginatedItemsResponse`](EquationsReplaceablesServicePaginatedItemsResponse.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:1106
