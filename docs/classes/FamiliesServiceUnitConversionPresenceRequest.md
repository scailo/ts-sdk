[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceUnitConversionPresenceRequest

# Class: FamiliesServiceUnitConversionPresenceRequest

Request message to verify the existence or availability of a specific unit of material (UOM) conversion rule for a given family.
Used defensively by client applications before allowing orders in alternate units.

**`Generated`**

from message Scailo.FamiliesServiceUnitConversionPresenceRequest

## Hierarchy

- `Message`\<[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)\>

  ↳ **`FamiliesServiceUnitConversionPresenceRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceUnitConversionPresenceRequest.md#constructor)

### Properties

- [familyId](FamiliesServiceUnitConversionPresenceRequest.md#familyid)
- [uomId](FamiliesServiceUnitConversionPresenceRequest.md#uomid)
- [fields](FamiliesServiceUnitConversionPresenceRequest.md#fields)
- [runtime](FamiliesServiceUnitConversionPresenceRequest.md#runtime)
- [typeName](FamiliesServiceUnitConversionPresenceRequest.md#typename)

### Methods

- [clone](FamiliesServiceUnitConversionPresenceRequest.md#clone)
- [equals](FamiliesServiceUnitConversionPresenceRequest.md#equals)
- [fromBinary](FamiliesServiceUnitConversionPresenceRequest.md#frombinary)
- [fromJson](FamiliesServiceUnitConversionPresenceRequest.md#fromjson)
- [fromJsonString](FamiliesServiceUnitConversionPresenceRequest.md#fromjsonstring)
- [getType](FamiliesServiceUnitConversionPresenceRequest.md#gettype)
- [toBinary](FamiliesServiceUnitConversionPresenceRequest.md#tobinary)
- [toJSON](FamiliesServiceUnitConversionPresenceRequest.md#tojson)
- [toJson](FamiliesServiceUnitConversionPresenceRequest.md#tojson-1)
- [toJsonString](FamiliesServiceUnitConversionPresenceRequest.md#tojsonstring)
- [equals](FamiliesServiceUnitConversionPresenceRequest.md#equals-1)
- [fromBinary](FamiliesServiceUnitConversionPresenceRequest.md#frombinary-1)
- [fromJson](FamiliesServiceUnitConversionPresenceRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceUnitConversionPresenceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceUnitConversionPresenceRequest**(`data?`): [`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)\> |

#### Returns

[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

#### Overrides

Message\&lt;FamiliesServiceUnitConversionPresenceRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:3526](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3526)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target family.

**`Example`**

```ts
582
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/families.scailo_pb.ts:3508](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3508)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target alternate unit of material (UOM).

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 uom_id = 11;

#### Defined in

[src/families.scailo_pb.ts:3524](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3524)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:3533](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3533)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:3531](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3531)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUnitConversionPresenceRequest"``

#### Defined in

[src/families.scailo_pb.ts:3532](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3532)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md) \| `PlainMessage`\<[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md) \| `PlainMessage`\<[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md) \| `PlainMessage`\<[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:3550](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3550)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

#### Defined in

[src/families.scailo_pb.ts:3538](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3538)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

#### Defined in

[src/families.scailo_pb.ts:3542](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3542)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUnitConversionPresenceRequest`](FamiliesServiceUnitConversionPresenceRequest.md)

#### Defined in

[src/families.scailo_pb.ts:3546](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L3546)
