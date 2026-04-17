[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServicePaginationResponse

# Class: EquationsWorkOrdersServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.EquationsWorkOrdersServicePaginationResponse

## Hierarchy

- `Message`\<[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)\>

  ↳ **`EquationsWorkOrdersServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServicePaginationResponse.md#constructor)

### Properties

- [count](EquationsWorkOrdersServicePaginationResponse.md#count)
- [offset](EquationsWorkOrdersServicePaginationResponse.md#offset)
- [payload](EquationsWorkOrdersServicePaginationResponse.md#payload)
- [total](EquationsWorkOrdersServicePaginationResponse.md#total)
- [fields](EquationsWorkOrdersServicePaginationResponse.md#fields)
- [runtime](EquationsWorkOrdersServicePaginationResponse.md#runtime)
- [typeName](EquationsWorkOrdersServicePaginationResponse.md#typename)

### Methods

- [clone](EquationsWorkOrdersServicePaginationResponse.md#clone)
- [equals](EquationsWorkOrdersServicePaginationResponse.md#equals)
- [fromBinary](EquationsWorkOrdersServicePaginationResponse.md#frombinary)
- [fromJson](EquationsWorkOrdersServicePaginationResponse.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServicePaginationResponse.md#fromjsonstring)
- [getType](EquationsWorkOrdersServicePaginationResponse.md#gettype)
- [toBinary](EquationsWorkOrdersServicePaginationResponse.md#tobinary)
- [toJSON](EquationsWorkOrdersServicePaginationResponse.md#tojson)
- [toJson](EquationsWorkOrdersServicePaginationResponse.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServicePaginationResponse.md#tojsonstring)
- [equals](EquationsWorkOrdersServicePaginationResponse.md#equals-1)
- [fromBinary](EquationsWorkOrdersServicePaginationResponse.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServicePaginationResponse.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServicePaginationResponse**(`data?`): [`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)\> |

#### Returns

[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

#### Overrides

Message\&lt;EquationsWorkOrdersServicePaginationResponse\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1396](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1396)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1366)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1376)

___

### payload

• **payload**: [`EquationWorkOrder`](EquationWorkOrder.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.EquationWorkOrder payload = 4;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1394)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1386](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1386)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1403](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1403)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1401](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1401)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersServicePaginationResponse"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1402)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1422](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1422)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1410](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1410)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1414](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1414)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServicePaginationResponse`](EquationsWorkOrdersServicePaginationResponse.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_work_orders.scailo_pb.ts#L1418)
